---
title: ThingsOnEdge Cricket IoT Moisture Sensor with Home Assistant
description: >
  My first foray into IoT soil moisture sensing. Describes calibrating a
  moisture sensor, connecting it to a Cricket IoT esp32 board, and receiving
  mqtt moisture readings on Home-Assistant.
tags: internet-of-things
category: professional
---

{: .lead }
{{ page.description }}

This post isn't very interesting narrative-wise. My intention is to document
some of the different pieces and configurations I stitched together to get this
project sort-of working. When I was learning about these things, I remember
wanting moar photos and moar implementation details. So here goes.

If there's a part you'd
like more details on, open an issue on github (link at the bottom of this page)
or send me an email, and I'll queue it.

---

I got a handful of [ThingsOnEdge Cricket IoT Wi-Fi devices](https://www.thingsonedge.com/product-page/wifi-cricket).

{% include image.html alt='ThingsOnEdge Cricket' image='electrical-engineering/iot-cricket-a929dc_58e9c602eda04755874b28732e29c4b5_mv2.webp' width='400px' caption='Image from <a href="https://www.thingsonedge.com/product-page/wifi-cricket">ThingsOnEdge Cricket product page</a>' %}


I also got some capacitive soil moisture sensors. I painted the top and sites with clear nail polish.

{% include image.html alt='GikFun Soil Moisture Probe' image='electrical-engineering/gikfun-capacitive-soil-moisture-sensor-715O9pxH36L._AC_SX679_.jpg' width='400px' caption='Image from <a href="https://www.amazon.com/Gikfun-Capacitive-Corrosion-Resistant-Detection/dp/B07H3P1NRM">Amazon store listing</a>' %}


I connected these to IO2 on the Cricket, and configured the cricket to read these as (digital/analog). Post via MQTT to a local broker (see my broker Docker config [on github](https://github.com/deargle/my-mosquitto)).

{% include image.html alt='Config for ThingsOnEdge Cricket as soil moisture probe' image='electrical-engineering/toe-cricket-config-soil-moisture.png' caption='Config for ThingsOnEdge Cricket as soil moisture probe' %}

Calibrated the sensor by baking a sample of our soil at ~200 degrees fahrenheit
until totally dry. Got IO2 readings directly from the MQTT broker for totally dry soil (93) and for sopping-wet soil (52). The IO2 readings is a representation of the ratio of the analog input voltage against the Cricket's reference voltage of 3.5V. The ratio is scaled by the configured resolution -- 8 bits, in my case -- so that the max IO2 value is 255. The formula is: `Vin = (Vref / 2**resolution) * IO2`

In my case, my IO2 reading of 93 came from an analog voltage reading of 1.27V, and my reading of 52 came from a reading of 0.71V. (see explanation [in the cricket docs](https://docs.google.com/document/d/e/2PACX-1vSLMmeT7LHo52Tu5rUoHpomhnLPz2Lr2JFKQCZevg8mKUv2M87bdbqb_7Al5pN9mxoxY2aqX-CRyLHk/pub#h.xg3xi622kjgx))

{% include image.html alt='calibrate-air' image='electrical-engineering/2021-12-29-soil-calibration-air.jpg' width='400px' caption='IO2 readings for air stabilized at 94' %}

{% include image.html alt='calibrate-baked-soil' image='electrical-engineering/2021-12-29-soil-calibration-baked-soil.jpg' width='400px'
caption='IO2 readings for baked soil stabilized at 93'
%}

{% include image.html alt='calibrate-sopping-wet-soil' image='electrical-engineering/2021-12-29-soil-calibration-sopping-wet-soil.jpg' width='400px'
caption='IO2 readings for sopping wet soil stabilized at 52'
 %}



Configure Home-Assistant to read the posted MQTT io2 values. Configured a
[Compensation integration](https://www.home-assistant.io/integrations/compensation/) to scale the dry/wet readings to 0/100%.

```yaml
sensor:
-  platform: mqtt
   name: cricket8_moisture
   state_topic: "/cricket8/io2"


compensation:
  cricket8_moisture_compensation:
    unique_id: cricket8_moisture_compensation
    source: sensor.cricket8_moisture
    unit_of_measurement: '%'
    data_points:
      - [93, 0]
      - [52, 100]
```

Configured a [`plant` component](https://www.home-assistant.io/integrations/plant/), which also displays battery and temperature readings
from the cricket.

```yaml
plant:
  cricket8_plant:
    sensors:
      moisture: sensor.compensation_sensor_cricket8_moisture
      battery: sensor.cricket8_battery
      temperature: sensor.cricket8_temp
```

{% include image.html alt='home-assistant-dashboard-plant-component' image='electrical-engineering/home-assistant-plant.png' width='400px'
caption='A simple dashboard entry created by the Plant component showing reported soil moisture, temperature, and battery.' %}

Dropped a small aquarium pump like [this one from ebay](https://www.ebay.com/itm/224647580427) into the watering can, and connected drip line from
it to emitters in the top of the plant tower. Plugged the pump into a [Sonoff S31
wifi outlet switch](https://sonoff.tech/product/smart-plug/s31-s31lite/).

{% include image.html alt='Drip-line pump' image='electrical-engineering/2022-02-25-cricket-moisture-with-pump.jpg' width='400px'
caption='Podunk irrigation is podunk.'
 %}



Flashed tasmota on the switch, connected it to home-assistant via MQTT. The
below image shows flashing a Wyze plug. These were really hard to open! I recommend the sonoffs over these.

{% include image.html alt='flashing a wyze' image='electrical-engineering/2021-12-01-wyze-flash-tasmota.jpg' width='400px' caption='Using the tasmota web flasher on a Wyze smart plug.' %}


Rammed the sensor into the soil, [Milliput](https://www.milliput.com/) putty holding things together.

{% include image.html alt='raw-probe-in-soil' image='electrical-engineering/2021-12-29-cricketmoisture-v1.jpg' width='400px' %}

Then I got nervous about accidentally watering
the Cricket, so I made a lego case. I don't have a 3d-printer!

{% include image.html alt='lego-probe-case' image='electrical-engineering/2022-03-17-cricket-moisture-1.jpg' width='400px' %}

{% include image.html alt='lego-probe-case' image='electrical-engineering/2022-03-17-cricket-moisture-2.jpg' width='400px' %}

{% include image.html alt='lego-probe-case' image='electrical-engineering/2022-03-17-cricket-moisture-3.jpg' width='400px' %}

{% include image.html alt='lego-probe-case' image='electrical-engineering/2022-03-17-cricket-moisture-4.jpg' width='400px' %}

{% include image.html alt='lego-probe-case' image='electrical-engineering/2022-03-17-cricket-moisture-5.jpg' width='400px' %}


At one point, I set up Node-RED to do Proportional Integral Derivative (PID) to keep the soil at a target moisture. I was using [`node-red-contrib-pid`](https://flows.nodered.org/node/node-red-contrib-pid) and [`node-red-contrib-timeprop`](https://flows.nodered.org/node/node-red-contrib-timeprop)
But the emitters flow rate was too high for the soil -- the soil wasn't retaining moisture long enough for it to disperse out, so the base of the tower was flooding. I put automatic watering on the project back-burner, but the sensors are still in.


---

Bonus project description! Separately, I used another cricket plus a heater connected to a tasmotized-sonoff outlet to keep plants in the garage from freezing. See below, where `sonoff_s31_lite_1` is the name of the switch that controls the heater. Target
temp of 38. I had to set a `keep_alive` of 3 minutes to keep the home-assistant
reading in sync with the switch (heater) state.

```yaml
sensor:
  - platform: mqtt
    name: cricket1_temp
    state_topic: "/cricket1/temp"
    unit_of_measurement: '°C'
    device_class: temperature

climate:
  - platform: generic_thermostat
    unique_id: Garage Thermostat
    name: Garage
    heater: switch.sonoff_s31_lite_1
    initial_hvac_mode: "heat"
    min_cycle_duration:
      seconds: 5
    keep_alive:
      minutes: 3
    target_sensor: sensor.cricket1_temp
    min_temp: 34
    max_temp: 70
    target_temp: 38
    cold_tolerance: 2
```

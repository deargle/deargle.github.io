---
title: Group activity website defacement via XSS playground
description: dwva public gcp for communal xss defacing
tags: security pedagogy
category: professional
---

lol I'm teaching Web Security today to my b-school students. It's a collection of miscellaneous random attacks possible against content hosted online -- XSS, SQLi, cloud storage bucket permissions, shopping cart attacks. I like live-demoing XSS website defacement during the class lecture. All students have access to [DVWA](http://www.dvwa.co.uk/) via their metasploitable2 instances, but I wanted a way where we could all deface the same website, for the visual impact. Figured one out -- [DVWA has a docker container](https://hub.docker.com/r/vulnerables/web-dvwa), and GCP makes it easy to launch docker instances as GCP virtual instances. Two commands in `gcloud`:

Set up a tagged firewall rule that lets port 80 (http) traffic through:

    gcloud compute firewall-rules create allow-http --allow tcp:80 --target-tags http-server

Launch the containerized instance, pointing to the docker hub dvwa container, and assigning it the `http-server` tag so that the firewall rule created in the above steps lets port 80 traffic through:

    gcloud compute instances create-with-container dvwa --container-image vulnerables/web-dvwa --tags http-server

The instance, once launched, will pull the image, and run it. The pulling make take a minute or two -- the serial console will show the progress.

Then, because [GCP runs the container in host networking mode](https://cloud.google.com/compute/docs/containers/configuring-options-to-run-containers), and because the container runs its webserver on port 80, the DVWA app will be accessible via the instance's public IP address. The public IP can be found from the GCP web console.

If perchance the instance gets compromised and wrecked by an internet denizen before I can demo the site to the class, or if perchance a student wrecks it, it's easy enough to spin up a fresh dvwa instance by rerunning the `gcloud create` command above. Be mindful that you can't have two instances with the same name, though (`dvwa` in the example above).

{% include image.html image='ncage.gif' %}

Edit: This idea of allowing students to anonymously edit a site that I am displaying in front of the class could have, and probably will have, _catastrophic_ consequences. YOLO.

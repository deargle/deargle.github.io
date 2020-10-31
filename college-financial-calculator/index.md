---
title: College financial calculator
description: Calculator that helps plan how much needs to be invested now, using a variety of investment strategies, in order to pay for college in the future.
date: 8/9/2018
layout: page
---


<style>
    .line-chart {
        border: 1px solid lightgray;
    }
    .line {
        fill: none;
        stroke-width: 5px;
    }
    .legend {
        padding: 5px;
        margin: 5px;
        /*font: 10px sans-serif;*/
        background: yellow;
        box-shadow: 2px 2px 1px #888;
    }
    #svg-holder {
        margin: 50px 0px;
    }
</style>

<!-- development version, includes helpful console warnings -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.min.js"></script>
<script src="https://d3js.org/d3.v5.min.js"></script>
<script src='/assets/js/finance.js'></script>
<script src='/assets/js/goalSeek.js'></script>

<script>
    var finance = new Finance();
    var margin = { top: 20, right: 20, bottom: 30, left: 50 };
    var svg_width=960, svg_height=500, width = +svg_width - margin.left - margin.right, height = +svg_height - margin.top - margin.bottom;
    var xScale, yScale, xAxis, yAxis, line;
    window.onload = function(){


        function drawChart() {

            var svg_holder = d3.select('#svg-holder');
            svg_holder.selectAll('*').remove();

            var svg = svg_holder.append('svg').attr('width', svg_width).attr('height', svg_height);
                g = svg.append('g')
                    .attr('id', 'svg-inner')
                    .attr('transform','translate(' + margin.left + ',' + margin.top + ')');


            g.append("text")
                .attr("class", "x label")
                .attr("text-anchor", "end")
                .attr("x", width)
                .attr("y", height + 30)
                .text("Months");

            xScale = d3.scaleLinear().range([0, width]).domain([0,100])
            //xScale = d3.scaleLinear().range([0, width])
            yScale = d3.scaleLinear().range([height, 0]).domain([0,50000])

            xAxis = d3.axisBottom( xScale )
            yAxis = d3.axisLeft( yScale )

            line = d3.line()
                    .x( function(d) { return xScale(d.period) } )
                    .y( function(d) { return yScale(d.fv) } )

            g.append('g').attr('id', 'left-axis').call(yAxis)
            g.append('g').attr('id', 'bottom-axis').attr('transform', 'translate(0, ' + height + ')').call(xAxis)

            var legend = g.append('g')
                .attr('class', 'legend')
                .attr('id','legend-container')
        }

        function updateChart(cashflows_hash) {
            cashflows_list = cashflows_hash.map(function (d) { return d.value });
            cashflows_name = cashflows_hash.map(function (d) { return d.name });

            var merged = d3.merge(cashflows_list)

            xScale.domain( d3.extent( merged, function(d) { return d['period'] }) );
            yScale.domain( d3.extent( merged, function(d) { return d['fv'] }) );

            var g = d3.select('#svg-inner');

            var colors = ["#1f77b4", "#ff7f0e", "#2ca02c"]//['green','orange','red']

            var pathContainers = g.selectAll('g.line')
                .data(cashflows_list)

            pathContainers.enter()
                .append('g')
                .attr('class','line')
                .attr('style', function(d, i) {
                    return 'stroke: ' + colors[i]
                });

            var t = d3.transition().duration(750)

            paths = pathContainers.selectAll('path')
                .data(function (d) { return [d] })

            paths.transition(t).attr('d', line);


            var pathsEnter = paths.enter()
                .append('path')
                .attr('d', line)
                .attr('stroke-dasharray', function(){ return this.getTotalLength() })
                .attr('stroke-dashoffset', function(){ return this.getTotalLength() })
                .transition(t)
                    .attr('stroke-dashoffset', 0)

            g.select('#left-axis').transition(t).call( yAxis )
            g.select('#bottom-axis').transition(t).call( xAxis )

            var legend = g.select('#legend-container').selectAll('g').data(cashflows_list);

                legend.enter()
                    .append('g')
                    .each(function(d, i) {
                        var _g = d3.select(this);

                        _g.append('rect').transition(t)
                            .attr('x', width - 65)
                            .attr('y', i * 25)
                            .attr('width', 10)
                            .attr('height', 10)
                            .style('fill', colors[i]);

                        _g.append('text').transition(t)
                            .attr('x', width - 50)
                            .attr('y', i * 25 + 8)
                            .attr('width', 100)
                            .attr('height', 30)
                            .style('fill', colors[i])
                            .text(cashflows_name[i]);
                    })
                legend.exit().remove();
        }

        app = new Vue({
            el: '#app',
            data: {
                initial_attendance_cost_per_year: 18836,
                college_inflation_rate: 4,
                start_college_year: 2030,
                start_saving_year: new Date().getFullYear(),
                initial_investment: 0,
                rate_of_return: 6.00,
                monthly_investment: 500,
                one_time_investment: 10000,
                annual_investment: 3000,
                semesters_to_graduate: 4*2,
                semesters_per_year: 2,
                years_to_graduate: 4,
                make_different_first_investment: false
            },
            computed: {
                initial_attendance_cost_per_month: function() {
                    return this.initial_attendance_cost_per_year / 12;
                },
                monthly_inflation_rate: function() {
                    return this.college_inflation_rate / 12
                },
                nper: function() {
                    return this.months_until_start + this.months_in_school;
                },
                total_years: function() {
                    return ( this.start_college_year - this.start_saving_year ) + this.years_to_graduate;
                },
                months_until_start: function() {
                    return ( this.start_college_year - this.start_saving_year ) * 12;
                },
                months_in_school: function() {
                    //return (this.semesters_to_graduate / this.semesters_per_year) * 12;
                    return (this.years_to_graduate * 12)
                },
                payment_periods: function() {
                    var payment_periods = Array(this.nper).fill(0);

                    for(var n = 0; n < this.months_in_school; n++) {
                        _pp = this.months_until_start + n;
                        payment_periods[_pp] = 1;
                    }
                    return payment_periods;
                },
                payment_amounts: function() {
                    var payment_amounts = Array(this.nper).fill(0);

                    for (var i = 0; i < this.payment_periods.length; i++) {
                        if (this.payment_periods[i]) {
                            //payment_amounts[i] = this.initial_attendance_cost_per_month; // amount without inflation of costs
                            payment_amounts[i] = finance.FV(this.college_inflation_rate, this.initial_attendance_cost_per_month, Math.floor(i/12) );
                        }
                    }

                    return payment_amounts;
                },
                /*
                initial_attendance_cost_per_month: function() {
                    return (this.semesters_per_year / 12) * this.initial_attendance_cost;
                },
                */
                monthly_rr: function() {
                    return this.rate_of_return / 12
                },

                //investment entries
                monthly_investment_entries: function() {
                    var _return = Array(this.nper).fill(this.monthly_investment);
                    if (this.make_different_first_investment) {
                        _return[0] = this.initial_investment;
                    }
                    return _return;
                },
                annual_investment_entries: function() {
                    var _return = Array(this.nper).fill(0);
                    for (var i = 0; i < this.total_years; i++) {
                        _return[i*12] = this.annual_investment;
                    }
                    if (this.make_different_first_investment) {
                        _return[0] = this.initial_investment;
                    }

                    return _return;
                },
                up_front_investment_entries: function() {
                    var _return = Array(this.nper).fill(0)
                    _return[0] = this.one_time_investment;
                    return _return;
                },

                // last fv's
                monthly_last_fv: function() {
                    return this.monthly_cashflows[this.nper - 1]['fv'];
                },
                annual_investment_last_fv: function() {
                    return this.annual_cashflows[this.nper - 1]['fv'];
                },
                up_front_last_fv: function() {
                    return this.upfront_cashflows[this.nper - 1]['fv'];
                },

                // cash flows
                monthly_cashflows: function() {
                    return this.generate_cashflows( this.monthly_investment_entries )
                },
                annual_cashflows: function() {
                    return this.generate_cashflows( this.annual_investment_entries )
                },
                upfront_cashflows: function() {
                    return this.generate_cashflows( this.up_front_investment_entries )
                },

                // investment_totals
                monthly_investment_total: function() {
                    return this.sum_investment_total( this.monthly_investment_entries )
                },
                annual_investment_total: function() {
                    return this.sum_investment_total( this.annual_investment_entries )
                },
                upfront_investment_total: function() {
                    return this.sum_investment_total( this.up_front_investment_entries )
                },
                cashflow_meta: function() { return [{
                            method: "monthly",
                            flows: this.monthly_cashflows,
                            id: "table-monthly",
                            href: "#table-monthly"
                        },
                        {
                            method: "annual",
                            flows: this.annual_cashflows,
                            id: "table-annual",
                            href: "#table-annual"
                        },
                        {
                            method: "upfront lump sum",
                            flows: this.upfront_cashflows,
                            id: "table-upfront",
                            href: "#table-upfront"
                        }
                    ] },
                all_cashflows: function() {
                    return this.monthly_cashflows, this.annual_cashflows, this.upfront_cashflows

                }
            },
            watch: {
                all_cashflows: function() {
                    this.chart_all_cashflows()
                }

            },
            methods: {
                sum_investment_total: function(investments) {
                    const reducer = (accumulator, currentValue) => accumulator + currentValue;
                    return investments.reduce(reducer);
                },
                generate_cashflows: function(investments) {
                    var data = [];

                    var fv = 0;
                    for (var n = 0; n < this.nper; n++) {
                        var net_cashflow, money_in, money_out;

                        money_in = investments[n];

                        money_out = this.payment_amounts[n];

                        net_cashflow = money_in - money_out;

                        fv = finance.FV(this.monthly_rr, fv + net_cashflow, 1);

                        item = {
                            period: n,
                            money_in: money_in,
                            money_out: money_out,
                            net_cashflow: net_cashflow,
                            fv: fv
                        }

                        data.push(item);
                    }

                    return data;
                },
                chart_all_cashflows: function() {
                    var investment_entries_hash = [
                            {name: 'monthly', value: this.monthly_cashflows},
                            {name: 'annual', value: this.annual_cashflows},
                            {name: 'upfront', value: this.upfront_cashflows}
                        ]
                    updateChart(investment_entries_hash);
                },
                final_fv_for_monthly_investment: function (monthly_investment) {
                    this.monthly_investment = monthly_investment;
                    return this.monthly_last_fv;
                },
                final_fv_for_annual_investment: function (annual_investment) {
                    this.annual_investment = annual_investment;
                    return this.annual_investment_last_fv;
                },
                final_fv_for_upfront_investment: function (one_time_investment) {
                    this.one_time_investment = one_time_investment;
                    return this.up_front_last_fv;
                },
                do_all_goal_seeks: function() {
                    my_funcs = [this.final_fv_for_monthly_investment, this.final_fv_for_annual_investment, this.final_fv_for_upfront_investment]

                    for (i in my_funcs) {
                        this.do_goal_seek(my_funcs[i])
                    }
                },
                do_goal_seek: function(_func) {
                    var output = goalSeek({
                        Func: _func,
                        This: this,
                        aFuncParams: [null],
                        oFuncArgTarget: {
                            Position: 0
                        },
                        Goal: 0,
                        Tol: 0.1,
                        maxIter: 10000
                    });
                    _func(Math.ceil(output))
                }
            },
            filters: {
                f_currency: function(number) {
                    return d3.format(',')(Math.ceil(number))
                }
            },
            mounted: function () {
                drawChart();
                this.$nextTick(function() {
                    this.chart_all_cashflows();
                    this.do_all_goal_seeks();
                })
            },
        });
    }

</script>

{::nomarkdown}
<div id='app'>
    <p class='meta'>8/9/2018 by <a href='https://daveeargle.com'>Dave Eargle</a></p>
    <p>Use this calculator to determine how much you need to invest using one of three strategies (monthly, annually, or one-time up-front) in order to have sufficient funds for future expenses. Once the future expenses start, they continue regularly, and inflate annually, until the specified end time. I made this calculator to help me do what-if analyses for college expenses for children. But at this point, we're undecided about how much support we will provide. So this calculator is just for fun.</p>

    <p>Associated blog post <a href='{{ site.baseurl }}{% post_url 2018-08-09-College-Financial-Calculator %}'>here</a>.</p>
    <hr>

    {% raw %}
    <form id='per-semester'>
        <div class='form-row align-items-center'>
            <div class='form-group col-auto'>
                <label for=''>Cost of attendance per year right now</label>
                <div class='input-group'>
                    <div class='input-group-prepend'>
                        <span class='input-group-text'>$</span>
                    </div>
                    <input v-model.number='initial_attendance_cost_per_year' class='form-control' type='number' step='1000'/>
                    <div class="input-group-append">
                        <span class="input-group-text">.00</span>
                    </div>
                </div>

            </div>
            <div class='form-group col-auto'>
                <label>College cost inflation rate</label>
                <div class='input-group'>
                    <input v-model.number='college_inflation_rate' class='form-control' type='number' step='0.01'>
                    <div class='input-group-append'>
                        <span class='input-group-text'>%</span>
                    </div>
                </div>
            </div>
            <div class='col-sm-3'>
                <small class='form-text text-muted'>Check your college financial aid website. Search for something like "[school] cost of attendance."</small>
                <small class='form-text text-muted'>The calculator holds this amount constant within each school year, and adjusts this amount up for inflation for each new school year.</small>
            </div>
        </div>

        <div class='form-row align-items-center'>
            <div class='form-group col-auto'>
                <label for=''>Start saving this year</label>
                <input v-model.number='start_saving_year' class='form-control' id='start-save' type='number' value=''>
            </div>

            <div class='form-group col-auto'>
                <label for=''>Start college this year</label>
                <input v-model.number='start_college_year' class='form-control' type='number'>
            </div>

            <div class='form-group col-auto'>
                <label for=''>Number of years to graduate</label>
                <input v-model.number='years_to_graduate' class='form-control' type='number'>
            </div>
        </div>
        <!--
        <div class='form-group'>
            <label for=''>Number of semesters to graduate</label>
            <input v-model.number='semesters_to_graduate' class='form-control' type='number'>
        </div>

        <div class='form-group'>
            <label for=''>Number of semesters per year</label>
            <input v-model.number='semesters_per_year' class='form-control' type='number'>
        </div>
        -->

        <div class='form-row form-group'>
            <div class='col-auto'>
                <label>Rate of return on investment</label>
                <div class='input-group'>
                    <input v-model.number='rate_of_return' class='form-control' name='rate' type="number" placeholder="1.0" step="0.5" min="0">
                    <div class='input-group-append'>
                        <span class='input-group-text'>%</span>
                    </div>
                </div>
            </div>
        </div>


        <div>
            <h2>Investment Strategies</h2>

            <p class='form-text'>Three different options.</p>

            <div class='form-row align-items-center'>
                <div class='form-group col-auto'>
                    <label>Monthly investment strategy</label>
                    <div class='input-group'>
                        <div class='input-group-prepend'>
                            <span class='input-group-text'>$</span>
                        </div>
                        <input v-model.number='monthly_investment' class='form-control' name='monthly_investment' type="number" placeholder="1.0" min="0" step='100'>
                        <div class="input-group-append">
                            <span class="input-group-text">.00</span>
                        </div>
                    </div>
                </div>
                <div class='col-sm-3'>
                    <small class='form-text text-muted'>It is assumed that you continue to invest this amount at the beginning of each month through to the completion of college</small>
                </div>
            </div>

            <div class='form-row align-items-center'>
                <div class='form-group col-auto'>
                    <label>Annual investment strategy</label>
                    <div class='input-group'>
                        <div class='input-group-prepend'>
                            <span class='input-group-text'>$</span>
                        </div>
                        <input v-model.number='annual_investment' class='form-control' type="number" placeholder="1.0" min="0" step='500'>
                        <div class="input-group-append">
                            <span class="input-group-text">.00</span>
                        </div>
                    </div>
                </div>
                <div class='col-sm-3'>
                    <small class='form-text text-muted'>It is assumed that you continue to invest this amount at the beginning of each year through to the completion of college</small>
                </div>
            </div>

            <div class='form-row align-items-center'>
                <div class='form-group col-auto'>
                    <div class='input-group'>
                        <div class='form-check'>
                            <input class='form-check-input' type='checkbox' v-model='make_different_first_investment' />
                            <label>Make different initial investment</label>
                        </div>
                    </div>
                </div>
                <div class='form-group col-auto'>
                    <div class='input-group'>
                        <div class='input-group-prepend'>
                            <span class='input-group-text'>$</span>
                        </div>
                        <input v-model.number='initial_investment' class='form-control' type="number" placeholder="1.0" min="0" :disabled='!make_different_first_investment'>
                        <div class="input-group-append">
                            <span class="input-group-text">.00</span>
                        </div>
                    </div>
                </div>
                <div class='col-sm-3'>
                    <small class='form-text text-muted'>You may make an initial investment that is different than the otherwise-level investments for the 'monthly' and 'annual' investment strategies.</small>
                </div>
            </div>

            <hr/>

            <div class='form-row align-items-center'>
                <div class='form-group col-auto'>
                    <label>One-time investment strategy</label>
                    <div class='input-group'>
                        <div class='input-group-prepend'>
                            <span class='input-group-text'>$</span>
                        </div>
                        <input v-model.number='one_time_investment' class='form-control' type="number" placeholder="1.0" min="0" step='1000'>
                        <div class="input-group-append">
                            <span class="input-group-text">.00</span>
                        </div>
                    </div>
                </div>
                <div class='col-sm-3'>
                    <small class='form-text text-muted'>A single upfront lump sum</small>
                </div>
            </div>
        </div>




        <div class='form-row align-items-center'>
            <div class='col-auto'>
                <input v-on:click='do_all_goal_seeks' class='btn btn-primary' type='button' id='do-goal-seek' value='Optimize Investment Strategies'>
            </div>
            <div class='col-sm-3'>
                <small class='form-text text-muted'>This button uses goal seek to find the investment amounts for each of the strategies that results in a final investment value close to 0.</small>
            </div>
        </div>
    </form>


    <div id='svg-holder'></div>

    <template>
        <h2>Totals invested by method</h2>
        <table class='table table-sm'>
            <thead>
                <th>Method</th>
                <th>Total</th>
            </thead>
            <tbody>
                <tr v-for='total in [
                        {
                            method: "monthly",
                            amount: monthly_investment_total
                        },
                        {
                            method: "annual",
                            amount: annual_investment_total
                        },
                        {
                            method: "upfront lump sum",
                            amount: upfront_investment_total
                        }
                    ]'>
                    <td>{{ total.method }}</td>
                    <td>{{ total.amount | f_currency }}</td>
                </tr>
            </tbody>
        </table>
    </template>

    <h2>Cashflow tables</h2>
    <template v-for='cashflow in cashflow_meta' v-if='cashflow.flows.length'>
        <a class='btn' data-toggle='collapse' v-bind:href='cashflow.href' role='button' aria-expanded='false' v-bind:aria-controls='cashflow.href'>{{ cashflow.method }}</a>
    </template>
    <div class='accordion' id='cashflows-container'>
        <template v-for='cashflow in cashflow_meta' v-if='cashflow.flows.length'>
            <div v-bind:id='cashflow.id' class='collapse' data-parent='#cashflows-container'>
                <div class='card card-body'>
                    <h3>{{ cashflow.method }}</h3>
                    <table class='table table-sm'>
                        <thead>
                            <th>Month</th>
                            <th>Money In</th>
                            <th>Money Out</th>
                            <th>Net Cashflow</th>
                            <th>Value at end of period</th>
                        </thead>
                        <tbody>
                            <tr v-for='flow in cashflow.flows'>
                                <td>{{ flow.period }}</td>
                                <td>{{ flow.money_in | f_currency }}</td>
                                <td>{{ flow.money_out | f_currency }}</td>
                                <td>{{ flow.net_cashflow | f_currency }}</td>
                                <td>{{ flow.fv | f_currency }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </template>
    </div>

</div>
{:/nomarkdown}


<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
{% endraw %}

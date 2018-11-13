<div id="output">

    </div>

    <script type="text/template" id="test">

    {{#.}}
<h2>{{name}}</h2>

{{#settings}}
<p>Version: {{firmware_version}}</p>
<p>Version: {{last_updated}}</p>

measure_temperature
{{measure_temperature_min}}
{{measure_temperature_max}}</br>

measure_luminance
{{measure_luminance_min}}
{{measure_luminance_max}}</br>

flora_measure_fertility
{{flora_measure_fertility_min}}
{{flora_measure_fertility_max}}</br>

flora_measure_moisture_min
{{flora_measure_moisture_min}}
{{flora_measure_moisture_max}}</br>

{{/settings}}

</br>
</br>

    {{#capabilitiesObj}}
<b>{{measure_temperature.title.nl}}
    ({{measure_temperature.units.nl}})</b><br>

    <b>{{measure_luminance.title.nl}}
    ({{measure_luminance.units.nl}})</b><br>

    <b>{{flora_measure_fertility.title.nl}}
    ({{flora_measure_fertility.units.nl}})</b><br>

    <b>{{flora_measure_moisture.title.nl}}
    ({{flora_measure_moisture.units.nl}})</b><br>
    {{/capabilitiesObj}}

        {{/.}}
        </script>
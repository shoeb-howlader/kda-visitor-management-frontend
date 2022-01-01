<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <tr>
    <td class="px-0 py-5 border-b border-gray-200 bg-white text-2xl">
      <div class="flex items-center">
        <div class="ml-1">
          <p class="text-gray-900 whitespace-no-wrap">{{ index + 1 }} .</p>
        </div>
      </div>
    </td>
    <td class="px-1 py-5 border-b border-gray-200 bg-white">
      <div class="flex items-center">
        <div class="ml-0">
          <p class="text-gray-900 whitespace-no-wrap text-2xl">
            {{ visitor.name }}
          </p>
        </div>
      </div>
    </td>
    <td class="px-0 py-5 border-b border-gray-200 bg-white">
      <p class="text-gray-900 whitespace-no-wrap">
        {{ visitor.details }}
      </p>
    </td>
    <td class="px-0 py-5 border-b border-gray-200 bg-white">
      <p class="text-gray-900 whitespace-no-wrap text-2xl">{{ format_time }}</p>
    </td>
  </tr>
</template>
<script>
import { mapActions, mapState } from "vuex";
import { formatDistance, formatDuration, formatDistanceStrict } from "date-fns";
export default {
  props: ["visitor", "index"],
  data() {
    return {};
  },

  computed: {
    ...mapState([
      // ...
      "current_time",
    ]),

    format_time() {
      return this.getTimeDiffAndPrettyText().text;
      /*return formatDistance(this.visitor.arrival_time, this.current_time, {
        addSuffix: true,
      });*/
    },
    /*format_time() {
      return formatDistance(this.visitor.arrival_time, this.current_time, {
        addSuffix: true,
      });
      //this.visitor.arrival_time
    },*/
  },
  methods: {
    getTimeDiffAndPrettyText() {
      var oDatePublished = new Date(this.visitor.arrival_time);
      var oResult = {};

      var oToday = new Date(this.current_time);

      var nDiff = oToday.getTime() - oDatePublished.getTime();

      // Get diff in days
      oResult.days = Math.floor(nDiff / 1000 / 60 / 60 / 24);
      nDiff -= oResult.days * 1000 * 60 * 60 * 24;

      // Get diff in hours
      oResult.hours = Math.floor(nDiff / 1000 / 60 / 60);
      nDiff -= oResult.hours * 1000 * 60 * 60;

      // Get diff in minutes
      oResult.minutes = Math.floor(nDiff / 1000 / 60);
      nDiff -= oResult.minutes * 1000 * 60;

      // Get diff in seconds
      oResult.seconds = Math.floor(nDiff / 1000);

      // Render the diffs into friendly duration string

      // Days
      var sDays = "00";
      if (oResult.days > 0) {
        sDays = String(oResult.days);
      }
      if (sDays.length === 1) {
        sDays = "0" + sDays;
      }

      // Format Hours
      var sHour = "00";
      if (oResult.hours > 0) {
        sHour = String(oResult.hours);
      }
      if (sHour.length === 1) {
        sHour = "0" + sHour;
      }

      //  Format Minutes
      var sMins = "00";
      if (oResult.minutes > 0) {
        sMins = String(oResult.minutes);
      }
      if (sMins.length === 1) {
        sMins = "0" + sMins;
      }

      //  Format Seconds
      var sSecs = "00";
      if (oResult.seconds > 0) {
        sSecs = String(oResult.seconds);
      }
      if (sSecs.length === 1) {
        sSecs = "0" + sSecs;
      }

      //  Set Duration
      var sDuration = sDays + ":" + sHour + ":" + sMins + ":" + sSecs;
      oResult.duration = sDuration;

      // Set friendly text for printing
      if (oResult.days === 0) {
        if (oResult.hours === 0) {
          if (oResult.minutes === 0) {
            var sSecHolder = oResult.seconds > 1 ? "Seconds" : "Second";
            oResult.friendlyNiceText =
              oResult.seconds + " " + sSecHolder + " ago";
          } else {
            var sMinutesHolder = oResult.minutes > 1 ? "Minutes" : "Minute";
            oResult.friendlyNiceText =
              oResult.minutes + " " + sMinutesHolder + " ago";
          }
        } else {
          var sHourHolder = oResult.hours > 1 ? "Hours" : "Hour";
          oResult.friendlyNiceText = oResult.hours + " " + sHourHolder + " ago";
        }
      } else {
        var sDayHolder = oResult.days > 1 ? "Days" : "Day";
        oResult.friendlyNiceText = oResult.days + " " + sDayHolder + " ago";
      }
      var sHourHolder = oResult.hours > 1 ? "Hours" : "Hour";
      var sMinutesHolder = oResult.minutes > 1 ? "Minutes" : "Minute";
      var sDayHolder = oResult.days > 1 ? "Days" : "Day";

      if (oResult.days === 0) {
        if (oResult.hours === 0) {
          if (oResult.minutes === 0) {
            oResult.text = oResult.minutes + " " + sMinutesHolder;
          } else {
            oResult.text = oResult.minutes + " " + sMinutesHolder;
          }
        } else {
          oResult.text =
            oResult.hours +
            " " +
            sHourHolder +
            " " +
            oResult.minutes +
            " " +
            sMinutesHolder;
        }
      } else {
        oResult.text =
          oResult.days +
          " " +
          oResult.hours +
          " " +
          sHourHolder +
          " " +
          oResult.minutes +
          " " +
          sMinutesHolder;
      }

      return oResult;
    },
  },
};
</script>
<style lang="">
</style>
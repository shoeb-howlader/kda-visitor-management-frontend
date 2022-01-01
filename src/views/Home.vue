<template>
  <div class="clock">
    <h2>
      {{ strTime }}
    </h2>
  </div>

  <div class="bg-white p-8 rounded-md w-full">
    <div>
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  class="
                    px-1
                    py-3
                    border-b-2 border-gray-200
                    bg-gray-100
                    text-left text-2xl
                    font-semibold
                    text-gray-600
                    uppercase
                    tracking-wider
                  "
                >
                  SL
                </th>
                <th
                  class="
                    px-5
                    py-3
                    border-b-2 border-gray-200
                    bg-gray-100
                    text-left text-2xl
                    font-semibold
                    text-gray-600
                    uppercase
                    tracking-wider
                  "
                >
                  Name
                </th>
                <th
                  class="
                    px-0
                    py-3
                    border-b-2 border-gray-200
                    bg-gray-100
                    text-left text-2xl
                    font-semibold
                    text-gray-600
                    uppercase
                    tracking-wider
                  "
                >
                  Details
                </th>
                <th
                  class="
                    px-0
                    py-3
                    border-b-2 border-gray-200
                    bg-gray-100
                    text-left text-2xl
                    font-semibold
                    text-gray-600
                    uppercase
                    tracking-wider
                  "
                >
                  Waiting Time
                </th>
              </tr>
            </thead>
            <tbody>
              <Visitor
                v-for="(visitor, index) in visitors"
                :key="index"
                :visitor="visitor"
                :index="index"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Visitor from "../components/Visitor.vue";
import { mapActions } from "vuex";
import { mapState } from "vuex";
import $ from "jquery";
// @ is an alias to /src

export default {
  name: "Home",
  components: { Visitor },
  data() {
    return {
      strTime: "",
    };
  },
  watch: {
    current_time(newValue, oldValue) {
      var hours = this.current_time.getHours();
      var minutes = this.current_time.getMinutes();
      var seconds = this.current_time.getSeconds();
      var ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      this.strTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
    },
  },
  computed: mapState({
    // map this.count to store.state.count
    current_time: (state) => new Date(state.current_time),
    visitors: "visitors",
  }),
  methods: {
    ...mapActions([
      "timer", // map `this.increment()` to `this.$store.dispatch('increment')`
    ]),
  },
  mounted() {
    this.timer();
    //console.log(this.visitors);
  },
};
</script>
<style>
@font-face {
  font-family: myFirstFont;
  src: url(../assets/fonts/digital-7.ttf);
}
.clock {
  font-family: myFirstFont;
  margin: auto;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
}
</style>

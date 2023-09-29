<template>
  <div>
    <table class="table-fixed w-full select-none" v-show="!isLoading">
      <thead class="bg-gray-200">
        <tr>
          <th class="px-4 py-2 w-20">Heure</th>
          <th
            class="px-4 py-2 border-l border-gray-300"
            v-for="day in days"
            :key="day"
          >
            {{ day }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="hour in hours"
          class="border-l border-gray-300 border-b border-gray-200"
          :key="hour"
        >
          <td class="px-4 py-2">{{ hour }}</td>

          <td
            class="px-4 py-2 border-l border-gray-300"
            v-for="day in days"
            :class="{
              'bg-green-400': getSession(day, hour),
              'cursor-pointer': getSession(day, hour),
            }"
            @click="showPopup(day, hour)"
            :key="day"
          >
            {{ getSession(day, hour) ? getSession(day, hour).activity : "" }}
          </td>
        </tr>
      </tbody>
    </table>

    <div v-show="isLoading" class="flex justify-center items-center ">
      <h1 class="text-3xl font-bold text-center">
        <Icon name="line-md:loading-loop" size="64" />
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: [
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
        "Dimanche",
      ],
      hours: [
        "8h",
        "9h",
        "10h",
        "11h",
        "12h",
        "13h",
        "14h",
        "15h",
        "16h",
        "17h",
        "18h",
        "19h",
        "20h",
      ],
      isLoading: true,
      sessions: [],
    };
  },

  methods: {
    getSession(day, hour) {
      return this.sessions.find((s) => {
        const [start, end] = s.hour.split("-");
        day = day.toLowerCase();
        return s.day === day && hour >= start && hour < end;
      });
    },

    showPopup(day, hour) {
      const session = this.getSession(day, hour);
      if (session) {
        alert(
          `${session.activity} : ${session.description} le ${session.day} de ${session.hour}`
        );
      }
    },
  },

  mounted() {
    fetch("http://127.0.0.1/edsa-mycoach/api.php?resource=activities")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.isLoading = false;
        this.sessions = data.map((activity) => {
          return {
            day: activity.jour,
            hour: activity.horaire,
            activity: activity.nom,
            description: activity.description,
          };
        });

        console.log(this.sessions);
      });
  },
};
</script>

<template>
  <div>
    
    <div
      v-show="!isLoading"
      class="flex flex-col md:flex-row justify-center items-start reallyfull"
    >
    <div class="m-4 h-full w-full select-none border-collapse rounded-lg overflow-hidden shadow-xl bg-gray-50 border-2 border-gray-400">
    <table class=" table-fixed  h-full w-full rounded-lg overflow-hidden">

        <thead class="bg-gray-300">
          <tr > 
            <th class="px-4 py-2 w-20">Heure</th>
            <th
              class="px-4 py-2"
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
            class="border border-gray-300"
            :key="hour"
          >
            <td class="px-4 py-2">{{ hour }}</td>

            <td
              class="px-4 py-2 text-black text-center font-semibold border border-gray-300 "
              v-for="day in days"
              :class="{
                'bg-orange-200': getSession(day, hour),
                'cursor-pointer': getSession(day, hour),
              }"
              @click="select(day, hour)"
              :key="day"
            >
              {{ getSession(day, hour) ? getSession(day, hour).activity : "" }}
            </td>
          </tr>
        </tbody>
      </table></div>
      <div class="flex-auto w-full md:w-96 flex flex-col m-4 md:ml-0">
        <div class="p-4 bg-orange-300 rounded-lg shadow-lg w-full shadow-inner">
          <div v-if="selected">
            <h1 class="font-bold">{{ selected.activity }}</h1>
            <span class="text-gray-800 font-light">
              {{ selected.day }} de {{ selected.hour }}
            </span>
            <p>{{ selected.description }}</p>
          </div>

          <div v-else>
            <h1 class="font-bold">Aucune activité sélectionnée</h1>
            <p>Sélectionnez une activité pour en savoir plus</p>
          </div>
        </div>

        <div class="mt-4 p-4 bg-gray-500 text-white rounded-lg shadow-lg w-full h-full shadow-inner">
          <h1 class="font-bold">S'inscrire</h1>

          <span class="text-gray-300 font-light">
            Veuillez vous connecter pour vous inscrire à une activité
          </span>
        </div>
      </div>
      
    </div>
    <div v-show="isLoading" class="flex justify-center items-center">
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
      selected: null,
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

    select(day, hour) {
      const session = this.getSession(day, hour);
      if (session) {
        this.selected = session;
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


<style scoped>
.reallyfull {
  height: calc(100vh - 100px);
}
</style>
<template>
  <div>
    
    <div
      v-show="!isLoading"
      class="flex flex-col md:flex-row justify-center items-start reallyfulltable"
    >
    <div class="m-4 h-full w-full select-none border-collapse rounded-lg overflow-hidden shadow-xl bg-gray-50 border-2 border-gray-400">
        <table class=" table-fixed  h-full w-full rounded-lg overflow-hidden">

      <!-- En-tête du tableau -->
      <thead class="bg-gray-300">
        <tr > 
          <th class="px-4 py-2 w-20">Heure</th>
          <!-- Boucle pour afficher les jours de la semaine -->
          <th
            class="px-4 py-2"
            v-for="day in days"
            :key="day"
          >
            {{ day }}
          </th>
        </tr>
      </thead>

      <!-- Corps du tableau -->
      <tbody>
        <!-- Boucle pour afficher les heures de la journée -->
        <tr
          v-for="hour in hours"
          class="border border-gray-300"
          :key="hour"
        >
          <td class="px-4 py-2">{{ hour }}</td>

          <!-- Boucle pour afficher les activités programmées pour chaque jour de la semaine et chaque heure de la journée -->
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
            <p>{{ selected.description }}</p>
          </div>

          <div v-else>
            <h1 class="font-bold">Aucune activité sélectionnée</h1>
            <p>Sélectionnez une activité pour en savoir plus</p>
          </div>
        </div>

        <div v-show="selected" class="pattern-wavy pattern-indigo-900 pattern-bg-black pattern-size-8  pattern-opacity-100 mt-4 p-4 text-white rounded-lg shadow-lg w-full h-full shadow-inner">
          <h1 class="font-semibold text-md text-2xl ">Reserver ce créneau</h1>

          <span class="text-gray-300 font-light">
            <Icon name="bx:bxs-calendar" size="16" />
            {{ selected ? selected.day : "" }}
            <Icon name="bx:bxs-time-five" size="16" />
            {{ selected ? selected.hour : "" }}

            <button class="mt-4 bg-green-500 hover:bg-green-700 text-black hover:text-white font-bold py-2 px-4 rounded-md w-full">
              Reserver <Icon name="bx:bxs-flag-checkered" size="16" />
            </button>
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

definePageMeta({
  middleware: 'auth' // this should match the name of the file inside the middleware directory 
});
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
    /**
     * Récupère la session correspondante au jour et à l'heure donnés.
     * @param {string} day - Le jour de la session (en minuscules).
     * @param {string} hour - L'heure de la session (au format "hh:mm-hh:mm").
     * @returns {Object} - La session correspondante ou undefined si aucune session n'est trouvée.
     */
    getSession(day, hour) {
      return this.sessions.find((s) => {
        const [start, end] = s.hour.split("-");
        day = day.toLowerCase();
        return s.day === day && hour >= start && hour < end;
      });
    },

    /**
     * Sélectionne la session correspondante au jour et à l'heure donnés.
     * @param {string} day - Le jour de la session (en minuscules).
     * @param {string} hour - L'heure de la session (au format "hh:mm-hh:mm").
     */
    select(day, hour) {
      const session = this.getSession(day, hour);
      if (session) {
        this.selected = session;
      }
    }
  },

  /**
   * Effectue une requête fetch pour récupérer les activités depuis l'API.
   * Les données récupérées sont ensuite utilisées pour remplir la liste des sessions.
   * @function mounted
   * @memberof Activites
   * @returns {void}
   */
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

</style>
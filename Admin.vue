<template>
  <section class="page-section">
    <b-container>
      <HeaderPage title="Gestão do Animalec" />
      <nav aria-label="Áreas de administração">
        <b-row class="justify-content-center">
          <b-col cols="12" md="9" lg="8">
            <b-row>
              <b-col cols="12" sm="6" class="mb-3"><AdminOptionBox routeName="listUsers" iconName="users" title="Utilizadores" /></b-col>
              <b-col cols="12" sm="6" class="mb-3"><AdminOptionBox routeName="listAnimals" iconName="dog" title="Animais" /></b-col>
              <b-col cols="12" sm="6" class="mb-3"><AdminOptionBox routeName="listQuizzes" iconName="file-alt" title="Quizzes" /></b-col>
              <b-col cols="12" sm="6" class="mb-3"><AdminOptionBox routeName="listQuestions" iconName="question-circle" title="Questões" /></b-col>
              <b-col cols="12" sm="6" class="mb-3"><AdminOptionBox routeName="listSponsors" iconName="handshake" title="Sponsors" /></b-col>
              <b-col cols="12" sm="6" class="mb-3"><AdminOptionBox routeName="listExperts" iconName="user-graduate" title="Experts" /></b-col>
            </b-row>
          </b-col>
        </b-row>
      </nav>
      <p class="text-muted text-center mt-3">Sponsors e Experts: protótipos académicos com dados guardados neste navegador.</p>
    </b-container>
  </section>
</template>
<script>
import HeaderPage from "@/components/HeaderPage.vue";
import AdminOptionBox from "@/components/AdminOptionBox.vue";

export default {
  components: {
    HeaderPage,
    AdminOptionBox
  }
};
</script>
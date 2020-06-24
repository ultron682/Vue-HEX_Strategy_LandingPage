<template>
    <div class="container">
    <div class="head-content">
      <div class="left-content">
        <h1 class="title">HEX Strategy</h1>
        <h2 class="sub-title">Prosta i wciągająca gra strategiczna</h2>

        <ul class="desc-list">
          <li>- turowa gra strategiczna z prostymi i przejrzystymi zasadami,</li>
          <li>- taktyczna, nie zawsze osiągniesz zwycięstwo starymi metodami,</li>
          <li>- wciągająca! Lubisz strategie? W HEX Strategy zostaniesz na dłużej. To jest pewne!</li>
          <li>- Multiplayer PvP! Zmierz się z innymi graczami. Pokaż kto jest Zwycięzcą,</li>
        </ul>
      </div>

      <div class="right-content">
        <img
          class="desc-image"
          alt="Main Image"
          src="land-screen.png"
        />
      </div>
    </div>

    <a
      href="https://play.google.com/store/apps/details?id=com.HeksanDEV.HexanGO&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
    >
      <img
        alt="pobierz z Google Play"
        src="https://play.google.com/intl/en_us/badges/static/images/badges/pl_badge_web_generic.png"
      />
    </a>

    <!-- <p>
      HEX Strategy to turowa strategia z trybem multiplayer. Twoim celem jest zniszczyć wrogą bazę dowodzenia, przy użyciu posiadanych kart. Jednostki tworzy się za pomocą kart, które dostajesz podczas rozpoczęcia każdej tury.
      Walcz przeciw wrogim siłom nieprzyjaciela. Zostań, potężnym dowódcom od którego zależy los bitwy.
      Zwycięzca może być tylko jeden! Stocz pojedynki przeciw innym graczom lub zagraj w kampanii dla jednego gracza! Użyj swoich wyjątkowych i potężnych kart, by odnieść zwycięstwo.
      Karty są ważną częścią HEX Strategy! Zdobywasz je w kampanii oraz w trybie rywalizacji PvP.
      Każda karta jest wyjątkowa, lecz tylko dane ich kombinacje dadzą przewagę. Aktualnie w grze znajdują się 26 kart, które odblokowujesz wraz z postępem w grze. W kampanii do ukończenia jest 18 zróżnicowanych poziomów + samouczek. Możesz być pewien, że znajdziesz tam wiele frajdy. Jakby to nadal było dla ciebie mało nie przejmuj się. Cały czas masz do dyspozycji tryb Rywalizacji PvP. Walcz z innymi graczami, i pokaż im, że to ty tutaj rządzisz.
      HEX Strategy jest tworzony tylko przez jedną osobę i dlatego znajduje się we WCZESNYM DOSTĘPIE. Cały czas pracuję nad nią i mogę z radością oznajmić że gra wkrótce wyjdzie z BETY!
      PROSTA A ZARAZEM ZŁOŻONA GRA STRATEGICZNA TBS
    </p>-->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

<style lang="scss" scoped>
.container {
  .head-content {
    height: 600px;
    display: flex;
    flex-direction: row;

    .left-content {
      width: 50%;
      height: 100%;

      .title {
        font-size: 60px;
      }

      .sub-title {
        font-size: 26px;
        display: inline-block;

        &::after {
          content: "";
          display: block;
          width: 100%;
          height: 5px;
          border-radius: 25px;
          background-color: white;
          animation: sub-title-anim 0.4s;
        }
      }

      .desc-list {
        width: 100%;
        padding: 30px;
        text-align: left;

        li {
          margin-top: 10px;
        }
      }
    }

    .right-content {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .desc-image {
        width: 70%;
      }
    }
  }
}

@keyframes sub-title-anim {
  0% {
    width: 0%;
  }
  20% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>
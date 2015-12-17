function initData() {
  jimData.variables["Mail"] = "";
  jimData.variables["Usuario"] = "";
  jimData.variables["d1"] = "";
  jimData.datamasters["Denuncias"] = [
    {
      "id": 1,
      "datamaster": "Denuncias",
      "userdata": {
        "id": "1",
        "Title": "Contenedor en Anchieta",
        "Body": "El contenedor que se encuentra cerca de la disa, en Anchieta, está quemado",
        "Date": "09/12/2011",
        "Picture": "./images/fceff1dc-6a15-4f20-bdd5-5613ac7d409e.jpg",
        "Firmas": "1",
        "Estado": "En proceso",
        "Localizacion": "28.491025, -16.316262"
      }
    },
    {
      "id": 2,
      "datamaster": "Denuncias",
      "userdata": {
        "id": "2",
        "Title": "Papelera Rota en Guajara",
        "Body": "La papelera que se encuentra cerca de la estación del tranvía en Guajara, está rota",
        "Date": "09/12/2011",
        "Picture": "./images/bb4c34bd-e3e6-479d-a2c5-50208a0de438.jpg",
        "Firmas": "4",
        "Estado": "Resuelto",
        "Localizacion": "28.492184, -16.315776"
      }
    }
  ];

  jimData.datamasters["usuarios"] = [
    {
      "id": 1,
      "datamaster": "usuarios",
      "userdata": {
        "username": "drcaspa",
        "password": "123456"
      }
    }
  ];

  jimData.isInitialized = true;
}
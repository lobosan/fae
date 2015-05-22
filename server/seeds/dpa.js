Meteor.startup(function () {
    var countDPA = DPA.find({}).count();

    if (countDPA === 0) {
        var dpas = [
            {
                "codigo": "01",
                "grupo": "Provincia",
                "descripcion": "AZUAY"
            },
            {
                "codigo": "0101",
                "grupo": "Cantón",
                "descripcion": "CUENCA"
            },
            {
                "codigo": "010102",
                "grupo": "Parroquia",
                "descripcion": "CAÑARIBAMBA"
            },
            {
                "codigo": "010103",
                "grupo": "Parroquia",
                "descripcion": "EL BATAN"
            },
            {
                "codigo": "010105",
                "grupo": "Parroquia",
                "descripcion": "EL VECINO"
            },
            {
                "codigo": "010107",
                "grupo": "Parroquia",
                "descripcion": "HUAYNACAPAC"
            },
            {
                "codigo": "010109",
                "grupo": "Parroquia",
                "descripcion": "MONAY"
            },
            {
                "codigo": "010110",
                "grupo": "Parroquia",
                "descripcion": "SAN BLAS (Cantón Cuenca)"
            },
            {
                "codigo": "010111",
                "grupo": "Parroquia",
                "descripcion": "SAN SEBASTIAN (Cantón Cuenca)"
            },
            {
                "codigo": "010112",
                "grupo": "Parroquia",
                "descripcion": "SUCRE (Cantón Cuenca)"
            },
            {
                "codigo": "010114",
                "grupo": "Parroquia",
                "descripcion": "YANUNCAY"
            },
            {
                "codigo": "010150",
                "grupo": "Parroquia",
                "descripcion": "CUENCA, CABECERA CANTONAL Y CAPITAL PROVINCIAL"
            },
            {
                "codigo": "010151",
                "grupo": "Parroquia",
                "descripcion": "BAÑOS (Cantón Cuenca)"
            },
            {
                "codigo": "010152",
                "grupo": "Parroquia",
                "descripcion": "CUMBE"
            },
            {
                "codigo": "010153",
                "grupo": "Parroquia",
                "descripcion": "CHAUCHA"
            },
            {
                "codigo": "010154",
                "grupo": "Parroquia",
                "descripcion": "CHECA (JIDCAY)  Cantón Cuenca"
            },
            {
                "codigo": "010155",
                "grupo": "Parroquia",
                "descripcion": "CHIQUINTAD"
            },
            {
                "codigo": "010156",
                "grupo": "Parroquia",
                "descripcion": "LLACAO"
            },
            {
                "codigo": "010157",
                "grupo": "Parroquia",
                "descripcion": "MOLLETURO"
            },
            {
                "codigo": "010158",
                "grupo": "Parroquia",
                "descripcion": "NULTI"
            },
            {
                "codigo": "010159",
                "grupo": "Parroquia",
                "descripcion": "OCTAVIO CORDERO PALACIOS (SANTA ROSA) "
            },
            {
                "codigo": "010160",
                "grupo": "Parroquia",
                "descripcion": "PACCHA (Cantón Cuenca)"
            },
            {
                "codigo": "010161",
                "grupo": "Parroquia",
                "descripcion": "QUINGEO"
            },
            {
                "codigo": "010162",
                "grupo": "Parroquia",
                "descripcion": "RICAURTE (Cantón Pucará)"
            },
            {
                "codigo": "010163",
                "grupo": "Parroquia",
                "descripcion": "SAN JOAQUIN"
            },
            {
                "codigo": "010164",
                "grupo": "Parroquia",
                "descripcion": "SANTA ANA (Cantón Cuenca)"
            },
            {
                "codigo": "010165",
                "grupo": "Parroquia",
                "descripcion": "SAYAUSI"
            },
            {
                "codigo": "010166",
                "grupo": "Parroquia",
                "descripcion": "SIDCAY"
            },
            {
                "codigo": "010167",
                "grupo": "Parroquia",
                "descripcion": "SININCAY"
            },
            {
                "codigo": "010168",
                "grupo": "Parroquia",
                "descripcion": "TARQUI (Cantón Cuenca)"
            },
            {
                "codigo": "010169",
                "grupo": "Parroquia",
                "descripcion": "TURI"
            },
            {
                "codigo": "010170",
                "grupo": "Parroquia",
                "descripcion": "VALLE (Cantón Cuenca)"
            },
            {
                "codigo": "010171",
                "grupo": "Parroquia",
                "descripcion": "VICTORIA DEL PORTETE (IRQUIS)"
            },
            {
                "codigo": "0102",
                "grupo": "Cantón",
                "descripcion": "GIRON"
            },
            {
                "codigo": "010250",
                "grupo": "Parroquia",
                "descripcion": "GIRON, CABECERA CANTONAL"
            },
            {
                "codigo": "010251",
                "grupo": "Parroquia",
                "descripcion": "ASUNCION (Cantón Girón)"
            },
            {
                "codigo": "010252",
                "grupo": "Parroquia",
                "descripcion": "SAN GERARDO (Cantón Girón)"
            },
            {
                "codigo": "0103",
                "grupo": "Cantón",
                "descripcion": "GUALACEO"
            },
            {
                "codigo": "010350",
                "grupo": "Parroquia",
                "descripcion": "GUALACEO, CABECERA CANTONAL"
            },
            {
                "codigo": "010352",
                "grupo": "Parroquia",
                "descripcion": "DANIEL CORDOVA TORAL (EL ORIENTE) "
            },
            {
                "codigo": "010353",
                "grupo": "Parroquia",
                "descripcion": "JADAN"
            },
            {
                "codigo": "010354",
                "grupo": "Parroquia",
                "descripcion": "MARIANO MORENO"
            },
            {
                "codigo": "010356",
                "grupo": "Parroquia",
                "descripcion": "REMIGIO CRESPO TORAL (GULAG)"
            },
            {
                "codigo": "010357",
                "grupo": "Parroquia",
                "descripcion": "SAN JUAN (Cantón Gualaceo)"
            },
            {
                "codigo": "010358",
                "grupo": "Parroquia",
                "descripcion": "ZHIDMAD"
            },
            {
                "codigo": "010359",
                "grupo": "Parroquia",
                "descripcion": "LUIS CORDERO VEGA (Cantón Gualaceo)"
            },
            {
                "codigo": "0104",
                "grupo": "Cantón",
                "descripcion": "NABON"
            },
            {
                "codigo": "010450",
                "grupo": "Parroquia",
                "descripcion": "NABON, CABECERA CANTONAL"
            },
            {
                "codigo": "010451",
                "grupo": "Parroquia",
                "descripcion": "COCHAPATA"
            },
            {
                "codigo": "010452",
                "grupo": "Parroquia",
                "descripcion": "EL PROGRESO (CAB.EN ZHOTA) Cantón Nabón"
            },
            {
                "codigo": "010453",
                "grupo": "Parroquia",
                "descripcion": "LAS NIEVES (CHAYA)"
            },
            {
                "codigo": "0105",
                "grupo": "Cantón",
                "descripcion": "PAUTE"
            },
            {
                "codigo": "010550",
                "grupo": "Parroquia",
                "descripcion": "PAUTE, CABECERA CANTONAL"
            },
            {
                "codigo": "010552",
                "grupo": "Parroquia",
                "descripcion": "BULAN (JOSE VICTOR IZQUIERDO) "
            },
            {
                "codigo": "010553",
                "grupo": "Parroquia",
                "descripcion": "CHICAN (GUILLERMO ORTEGA) "
            },
            {
                "codigo": "010554",
                "grupo": "Parroquia",
                "descripcion": "EL CABO  "
            },
            {
                "codigo": "010556",
                "grupo": "Parroquia",
                "descripcion": "GUARAINAG"
            },
            {
                "codigo": "010559",
                "grupo": "Parroquia",
                "descripcion": "SAN CRISTOBAL (CARLOS ORDOÑEZ LAZO)  Cantón Paute"
            },
            {
                "codigo": "010561",
                "grupo": "Parroquia",
                "descripcion": "TOMEBAMBA"
            },
            {
                "codigo": "010562",
                "grupo": "Parroquia",
                "descripcion": "DUG DUG"
            },
            {
                "codigo": "0106",
                "grupo": "Cantón",
                "descripcion": "PUCARA"
            },
            {
                "codigo": "010650",
                "grupo": "Parroquia",
                "descripcion": "PUCARA, CABECERA CANTONAL"
            },
            {
                "codigo": "010652",
                "grupo": "Parroquia",
                "descripcion": "SAN RAFAEL DE SHARUG"
            },
            {
                "codigo": "0107",
                "grupo": "Cantón",
                "descripcion": "SAN FERNANDO"
            },
            {
                "codigo": "010701",
                "grupo": "Parroquia",
                "descripcion": "SAN FERNANDO   (Cantón San Fernando - Azuay)"
            },
            {
                "codigo": "010750",
                "grupo": "Parroquia",
                "descripcion": "SAN FERNANDO, CABECERA CANTONAL"
            },
            {
                "codigo": "010751",
                "grupo": "Parroquia",
                "descripcion": "CHUMBLIN"
            },
            {
                "codigo": "0108",
                "grupo": "Cantón",
                "descripcion": "SANTA ISABEL"
            },
            {
                "codigo": "010850",
                "grupo": "Parroquia",
                "descripcion": "SANTA ISABEL (CHAGUARURCO), CABECERA CANTONAL"
            },
            {
                "codigo": "010851",
                "grupo": "Parroquia",
                "descripcion": "ABDON CALDERON  (LA UNION) "
            },
            {
                "codigo": "010853",
                "grupo": "Parroquia",
                "descripcion": "ZHAGLLI (SHAGLLI)"
            },
            {
                "codigo": "0109",
                "grupo": "Cantón",
                "descripcion": "SIGSIG"
            },
            {
                "codigo": "010950",
                "grupo": "Parroquia",
                "descripcion": "SIGSIG, CABECERA CANTONAL"
            },
            {
                "codigo": "010951",
                "grupo": "Parroquia",
                "descripcion": "CUCHIL (CUTCHIL) "
            },
            {
                "codigo": "010952",
                "grupo": "Parroquia",
                "descripcion": "JIMA (GIMA)"
            },
            {
                "codigo": "010953",
                "grupo": "Parroquia",
                "descripcion": "GUEL"
            },
            {
                "codigo": "010954",
                "grupo": "Parroquia",
                "descripcion": "LUDO"
            },
            {
                "codigo": "010955",
                "grupo": "Parroquia",
                "descripcion": "SAN BARTOLOME (Cantón Sigsig)"
            },
            {
                "codigo": "010956",
                "grupo": "Parroquia",
                "descripcion": "SAN JOSE DE RARANGA"
            },
            {
                "codigo": "0110",
                "grupo": "Cantón",
                "descripcion": "OÑA"
            },
            {
                "codigo": "011050",
                "grupo": "Parroquia",
                "descripcion": "SAN FELIPE DE OÑA CABECERA CANTONAL"
            },
            {
                "codigo": "011051",
                "grupo": "Parroquia",
                "descripcion": "SUSUDEL"
            },
            {
                "codigo": "0111",
                "grupo": "Cantón",
                "descripcion": "CHORDELEG"
            },
            {
                "codigo": "011150",
                "grupo": "Parroquia",
                "descripcion": "CHORDELEG, CABECERA CANTONAL"
            },
            {
                "codigo": "011151",
                "grupo": "Parroquia",
                "descripcion": "PRINCIPAL"
            },
            {
                "codigo": "011152",
                "grupo": "Parroquia",
                "descripcion": "LA UNION (Cantón Chordeleg)"
            },
            {
                "codigo": "011153",
                "grupo": "Parroquia",
                "descripcion": "LUIS GALARZA ORELLANA (CAB.EN DELEGSOL) "
            },
            {
                "codigo": "011154",
                "grupo": "Parroquia",
                "descripcion": "SAN MARTIN DE PUZHIO"
            },
            {
                "codigo": "0112",
                "grupo": "Cantón",
                "descripcion": "EL PAN"
            },
            {
                "codigo": "011250",
                "grupo": "Parroquia",
                "descripcion": "EL PAN, CABECERA CANTONAL"
            },
            {
                "codigo": "011253",
                "grupo": "Parroquia",
                "descripcion": "SAN VICENTE (Cantón El Pan)"
            },
            {
                "codigo": "0113",
                "grupo": "Cantón",
                "descripcion": "SEVILLA DE ORO"
            },
            {
                "codigo": "011350",
                "grupo": "Parroquia",
                "descripcion": "SEVILLA DE ORO, CABECERA CANTONAL"
            },
            {
                "codigo": "011351",
                "grupo": "Parroquia",
                "descripcion": "AMALUZA (Cantón Sevilla de Oro)"
            },
            {
                "codigo": "011352",
                "grupo": "Parroquia",
                "descripcion": "PALMAS"
            },
            {
                "codigo": "0114",
                "grupo": "Cantón",
                "descripcion": "GUACHAPALA"
            },
            {
                "codigo": "011450",
                "grupo": "Parroquia",
                "descripcion": "GUACHAPALA, CABECERA CANTONAL"
            },
            {
                "codigo": "0115",
                "grupo": "Cantón",
                "descripcion": "CAMILO PONCE ENRIQUEZ"
            },
            {
                "codigo": "011550",
                "grupo": "Parroquia",
                "descripcion": "CAMILO PONCE ENRIQUEZ, CABECERA CANTONAL"
            },
            {
                "codigo": "011551",
                "grupo": "Parroquia",
                "descripcion": "EL CARMEN DE PIJILI"
            },
            {
                "codigo": "02",
                "grupo": "Provincia",
                "descripcion": "BOLIVAR"
            },
            {
                "codigo": "0201",
                "grupo": "Cantón",
                "descripcion": "GUARANDA"
            },
            {
                "codigo": "020101",
                "grupo": "Parroquia",
                "descripcion": "ANGEL POLIBIO CHAVES"
            },
            {
                "codigo": "020102",
                "grupo": "Parroquia",
                "descripcion": "GABRIEL IGNACIO VEINTIMILLA"
            },
            {
                "codigo": "020103",
                "grupo": "Parroquia",
                "descripcion": "GUANUJO"
            },
            {
                "codigo": "020150",
                "grupo": "Parroquia",
                "descripcion": "GUARANDA, CABECERA CANTONAL Y CAPITAL PROVINCIAL"
            },
            {
                "codigo": "020151",
                "grupo": "Parroquia",
                "descripcion": "FACUNDO VELA"
            },
            {
                "codigo": "020153",
                "grupo": "Parroquia",
                "descripcion": "JULIO E. MORENO (CATANAHUAN GRANDE)"
            },
            {
                "codigo": "020155",
                "grupo": "Parroquia",
                "descripcion": "SALINAS ( Cantón Guaranda)"
            },
            {
                "codigo": "020156",
                "grupo": "Parroquia",
                "descripcion": "SAN LORENZO ( Cantón Guaranda)"
            },
            {
                "codigo": "020157",
                "grupo": "Parroquia",
                "descripcion": "SAN SIMON (YACOTO)"
            },
            {
                "codigo": "020158",
                "grupo": "Parroquia",
                "descripcion": "SANTAFE (SANTA FE)"
            },
            {
                "codigo": "020159",
                "grupo": "Parroquia",
                "descripcion": "SIMIATUG"
            },
            {
                "codigo": "020160",
                "grupo": "Parroquia",
                "descripcion": "SAN LUIS DE PAMBIL"
            },
            {
                "codigo": "0202",
                "grupo": "Cantón",
                "descripcion": "CHILLANES"
            },
            {
                "codigo": "020250",
                "grupo": "Parroquia",
                "descripcion": "CHILLANES, CABECERA CANTONAL"
            },
            {
                "codigo": "020251",
                "grupo": "Parroquia",
                "descripcion": "SAN JOSE DEL TAMBO (TAMBOPAMBA)"
            },
            {
                "codigo": "0203",
                "grupo": "Cantón",
                "descripcion": "CHIMBO"
            },
            {
                "codigo": "020350",
                "grupo": "Parroquia",
                "descripcion": "SAN JOSE DE CHIMBO, CABECERA CANTONAL"
            },
            {
                "codigo": "020351",
                "grupo": "Parroquia",
                "descripcion": "ASUNCION (ASANCOTO) "
            },
            {
                "codigo": "020353",
                "grupo": "Parroquia",
                "descripcion": "MAGDALENA (CHAPACOTO)"
            },
            {
                "codigo": "020354",
                "grupo": "Parroquia",
                "descripcion": "SAN SEBASTIAN  (Cantón Chimbo)"
            },
            {
                "codigo": "020355",
                "grupo": "Parroquia",
                "descripcion": "TELIMBELA"
            },
            {
                "codigo": "0204",
                "grupo": "Cantón",
                "descripcion": "ECHEANDIA"
            },
            {
                "codigo": "020450",
                "grupo": "Parroquia",
                "descripcion": "ECHEANDIA, CABECERA CANTONAL"
            },
            {
                "codigo": "0205",
                "grupo": "Cantón",
                "descripcion": "SAN MIGUEL"
            },
            {
                "codigo": "020550",
                "grupo": "Parroquia",
                "descripcion": "SAN MIGUEL, CABECERA CANTONAL"
            },
            {
                "codigo": "020551",
                "grupo": "Parroquia",
                "descripcion": "BALSAPAMBA"
            },
            {
                "codigo": "020552",
                "grupo": "Parroquia",
                "descripcion": "BILOVAN"
            },
            {
                "codigo": "020553",
                "grupo": "Parroquia",
                "descripcion": "REGULO DE MORA"
            },
            {
                "codigo": "020554",
                "grupo": "Parroquia",
                "descripcion": "SAN PABLO  (SAN PABLO DE ATENAS)"
            },
            {
                "codigo": "020555",
                "grupo": "Parroquia",
                "descripcion": "SANTIAGO (Cantón San Miguel)"
            },
            {
                "codigo": "020556",
                "grupo": "Parroquia",
                "descripcion": "SAN VICENTE (Cantón San Miguel)"
            },
            {
                "codigo": "0206",
                "grupo": "Cantón",
                "descripcion": "CALUMA"
            },
            {
                "codigo": "020650",
                "grupo": "Parroquia",
                "descripcion": "CALUMA, CABECERA CANTONAL"
            },
            {
                "codigo": "0207",
                "grupo": "Cantón",
                "descripcion": "LAS NAVES"
            },
            {
                "codigo": "020702",
                "grupo": "Parroquia",
                "descripcion": "LAS NAVES"
            },
            {
                "codigo": "020750",
                "grupo": "Parroquia",
                "descripcion": "LAS NAVES, CABECERA CANTONAL"
            },
            {
                "codigo": "03",
                "grupo": "Provincia",
                "descripcion": "CAÑAR"
            },
            {
                "codigo": "0301",
                "grupo": "Cantón",
                "descripcion": "AZOGUES"
            },
            {
                "codigo": "030101",
                "grupo": "Parroquia",
                "descripcion": "AURELIO BAYAS MARTINEZ"
            },
            {
                "codigo": "030103",
                "grupo": "Parroquia",
                "descripcion": "BORRERO"
            },
            {
                "codigo": "030150",
                "grupo": "Parroquia",
                "descripcion": "AZOGUES, CABECERA CANTONAL Y CAPITAL PROVINCIAL"
            },
            {
                "codigo": "030151",
                "grupo": "Parroquia",
                "descripcion": "COJITAMBO"
            },
            {
                "codigo": "030153",
                "grupo": "Parroquia",
                "descripcion": "GUAPAN"
            },
            {
                "codigo": "030154",
                "grupo": "Parroquia",
                "descripcion": "JAVIER LOYOLA (CHUQUIPATA) "
            },
            {
                "codigo": "030155",
                "grupo": "Parroquia",
                "descripcion": "LUIS CORDERO (Cantón Azogues)"
            },
            {
                "codigo": "030156",
                "grupo": "Parroquia",
                "descripcion": "PINDILIG"
            },
            {
                "codigo": "030157",
                "grupo": "Parroquia",
                "descripcion": "RIVERA"
            },
            {
                "codigo": "030158",
                "grupo": "Parroquia",
                "descripcion": "SAN MIGUEL (Cantón Azogues)"
            },
            {
                "codigo": "030160",
                "grupo": "Parroquia",
                "descripcion": "TADAY"
            },
            {
                "codigo": "0302",
                "grupo": "Cantón",
                "descripcion": "BIBLIAN"
            },
            {
                "codigo": "030250",
                "grupo": "Parroquia",
                "descripcion": "BIBLIAN, CABECERA CANTONAL"
            },
            {
                "codigo": "030251",
                "grupo": "Parroquia",
                "descripcion": "NAZON (CAB. EN PAMPA DE DOMINGUEZ)"
            },
            {
                "codigo": "030252",
                "grupo": "Parroquia",
                "descripcion": "SAN FRANCISCO DE SAGEO (Cantón Biblián)"
            },
            {
                "codigo": "030253",
                "grupo": "Parroquia",
                "descripcion": "TURUPAMBA"
            },
            {
                "codigo": "030254",
                "grupo": "Parroquia",
                "descripcion": "JERUSALEN"
            },
            {
                "codigo": "0303",
                "grupo": "Cantón",
                "descripcion": "CAÑAR"
            },
            {
                "codigo": "030350",
                "grupo": "Parroquia",
                "descripcion": "CAÑAR, CABECERA CANTONAL"
            },
            {
                "codigo": "030351",
                "grupo": "Parroquia",
                "descripcion": "CHONTAMARCA"
            },
            {
                "codigo": "030352",
                "grupo": "Parroquia",
                "descripcion": "CHOROCOPTE"
            },
            {
                "codigo": "030353",
                "grupo": "Parroquia",
                "descripcion": "GENERAL MORALES (SOCARTE) "
            },
            {
                "codigo": "030354",
                "grupo": "Parroquia",
                "descripcion": "GUALLETURO"
            },
            {
                "codigo": "030355",
                "grupo": "Parroquia",
                "descripcion": "HONORATO VASQUEZ (TAMBO VIEJO)  Cantón Cañar"
            },
            {
                "codigo": "030356",
                "grupo": "Parroquia",
                "descripcion": "INGAPIRCA"
            },
            {
                "codigo": "030357",
                "grupo": "Parroquia",
                "descripcion": "JUNCAL"
            },
            {
                "codigo": "030358",
                "grupo": "Parroquia",
                "descripcion": "SAN ANTONIO (Cantón Cañar)"
            },
            {
                "codigo": "030361",
                "grupo": "Parroquia",
                "descripcion": "ZHUD"
            },
            {
                "codigo": "030362",
                "grupo": "Parroquia",
                "descripcion": "VENTURA"
            },
            {
                "codigo": "030363",
                "grupo": "Parroquia",
                "descripcion": "DUCUR"
            },
            {
                "codigo": "0304",
                "grupo": "Cantón",
                "descripcion": "LA TRONCAL"
            },
            {
                "codigo": "030450",
                "grupo": "Parroquia",
                "descripcion": "LA TRONCAL, CABECERA CANTONAL"
            },
            {
                "codigo": "030451",
                "grupo": "Parroquia",
                "descripcion": "MANUEL J. CALLE"
            },
            {
                "codigo": "030452",
                "grupo": "Parroquia",
                "descripcion": "PANCHO NEGRO"
            },
            {
                "codigo": "0305",
                "grupo": "Cantón",
                "descripcion": "EL TAMBO"
            },
            {
                "codigo": "030550",
                "grupo": "Parroquia",
                "descripcion": "EL TAMBO, CABECERA CANTONAL"
            },
            {
                "codigo": "0306",
                "grupo": "Cantón",
                "descripcion": "DELEG"
            },
            {
                "codigo": "030650",
                "grupo": "Parroquia",
                "descripcion": "DELEG, CABECERA CANTONAL "
            },
            {
                "codigo": "030651",
                "grupo": "Parroquia",
                "descripcion": "SOLANO"
            },
            {
                "codigo": "0307",
                "grupo": "Cantón",
                "descripcion": "SUSCAL"
            },
            {
                "codigo": "030750",
                "grupo": "Parroquia",
                "descripcion": "SUSCAL, CABECERA CANTONAL"
            },
            {
                "codigo": "04",
                "grupo": "Provincia",
                "descripcion": "CARCHI"
            },
            {
                "codigo": "0401",
                "grupo": "Cantón",
                "descripcion": "TULCAN"
            },
            {
                "codigo": "040101",
                "grupo": "Parroquia",
                "descripcion": "GONZALEZ SUAREZ (Cantón Túlcan)"
            },
            {
                "codigo": "040102",
                "grupo": "Parroquia",
                "descripcion": "TULCAN"
            },
            {
                "codigo": "040150",
                "grupo": "Parroquia",
                "descripcion": "TULCAN, CABECERA CANTONAL Y CAPITAL PROVINCIAL"
            },
            {
                "codigo": "040151",
                "grupo": "Parroquia",
                "descripcion": "EL CARMELO (EL PUN) "
            },
            {
                "codigo": "040153",
                "grupo": "Parroquia",
                "descripcion": "JULIO ANDRADE (OREJUELA) "
            },
            {
                "codigo": "040154",
                "grupo": "Parroquia",
                "descripcion": "MALDONADO (Cantón Tulcán)"
            },
            {
                "codigo": "040155",
                "grupo": "Parroquia",
                "descripcion": "PIOTER"
            },
            {
                "codigo": "040156",
                "grupo": "Parroquia",
                "descripcion": "TOBAR DONOSO (LA BOCANA DE CAMUMBI) "
            },
            {
                "codigo": "040157",
                "grupo": "Parroquia",
                "descripcion": "TUFIÑO"
            },
            {
                "codigo": "040158",
                "grupo": "Parroquia",
                "descripcion": "URBINA (TAYA)"
            },
            {
                "codigo": "040161",
                "grupo": "Parroquia",
                "descripcion": "SANTA MARTHA DE CUBA"
            },
            {
                "codigo": "0402",
                "grupo": "Cantón",
                "descripcion": "BOLIVAR"
            },
            {
                "codigo": "040250",
                "grupo": "Parroquia",
                "descripcion": "BOLIVAR, CABECERA CANTONAL"
            },
            {
                "codigo": "040251",
                "grupo": "Parroquia",
                "descripcion": "GARCIA MORENO (Cantón Bolívar - El Carchi)"
            },
            {
                "codigo": "040252",
                "grupo": "Parroquia",
                "descripcion": "LOS ANDES"
            },
            {
                "codigo": "040253",
                "grupo": "Parroquia",
                "descripcion": "MONTE OLIVO"
            },
            {
                "codigo": "040254",
                "grupo": "Parroquia",
                "descripcion": "SAN VICENTE DE PUSIR"
            },
            {
                "codigo": "040255",
                "grupo": "Parroquia",
                "descripcion": "SAN RAFAEL (Cantón Bolívar - El Carchi)"
            },
            {
                "codigo": "0403",
                "grupo": "Cantón",
                "descripcion": "ESPEJO"
            },
            {
                "codigo": "040301",
                "grupo": "Parroquia",
                "descripcion": "EL ANGEL"
            },
            {
                "codigo": "040302",
                "grupo": "Parroquia",
                "descripcion": "27 DE SEPTIEMBRE"
            },
            {
                "codigo": "040350",
                "grupo": "Parroquia",
                "descripcion": "EL ANGEL, CABECERA CANTONAL"
            },
            {
                "codigo": "040351",
                "grupo": "Parroquia",
                "descripcion": "EL GOALTAL"
            },
            {
                "codigo": "040352",
                "grupo": "Parroquia",
                "descripcion": "LA LIBERTAD (ALIZO) Cantón Espejo - El Carchi"
            },
            {
                "codigo": "040353",
                "grupo": "Parroquia",
                "descripcion": "SAN ISIDRO (Cantón Espejo)"
            },
            {
                "codigo": "0404",
                "grupo": "Cantón",
                "descripcion": "MIRA"
            },
            {
                "codigo": "040450",
                "grupo": "Parroquia",
                "descripcion": "MIRA (CHONTAHUASI), CABECERA CANTONAL"
            },
            {
                "codigo": "040451",
                "grupo": "Parroquia",
                "descripcion": "CONCEPCION (Cantón Mira)"
            },
            {
                "codigo": "040452",
                "grupo": "Parroquia",
                "descripcion": "JIJON Y CAAMAÑO (CAB. EN RIO BLANCO)"
            },
            {
                "codigo": "040453",
                "grupo": "Parroquia",
                "descripcion": "JUAN MONTALVO (SAN IGNACIO DE QUIL) Cantón Mira"
            },
            {
                "codigo": "0405",
                "grupo": "Cantón",
                "descripcion": "MONTUFAR"
            },
            {
                "codigo": "040501",
                "grupo": "Parroquia",
                "descripcion": "GONZALEZ SUAREZ (Cantón Montufar)"
            },
            {
                "codigo": "040502",
                "grupo": "Parroquia",
                "descripcion": "SAN JOSE (Cantón Montufar)"
            },
            {
                "codigo": "040550",
                "grupo": "Parroquia",
                "descripcion": "SAN GABRIEL, CABECERA CANTONAL"
            },
            {
                "codigo": "040551",
                "grupo": "Parroquia",
                "descripcion": "CRISTOBAL COLON"
            },
            {
                "codigo": "040552",
                "grupo": "Parroquia",
                "descripcion": "CHITAN DE NAVARRETE"
            },
            {
                "codigo": "040553",
                "grupo": "Parroquia",
                "descripcion": "FERNANDEZ SALVADOR"
            },
            {
                "codigo": "040554",
                "grupo": "Parroquia",
                "descripcion": "LA PAZ (Cantón Montúfar)"
            },
            {
                "codigo": "040555",
                "grupo": "Parroquia",
                "descripcion": "PIARTAL"
            },
            {
                "codigo": "0406",
                "grupo": "Cantón",
                "descripcion": "SAN PEDRO DE HUACA"
            },
            {
                "codigo": "040650",
                "grupo": "Parroquia",
                "descripcion": "HUACA, CABECERA CANTONAL"
            },
            {
                "codigo": "040651",
                "grupo": "Parroquia",
                "descripcion": "MARISCAL SUCRE (Cantón San Pedro de Huaca)"
            },
            {
                "codigo": "05",
                "grupo": "Provincia",
                "descripcion": "COTOPAXI"
            },
            {
                "codigo": "0501",
                "grupo": "Cantón",
                "descripcion": "LATACUNGA"
            },
            {
                "codigo": "050101",
                "grupo": "Parroquia",
                "descripcion": "ELOY ALFARO  (SAN FELIPE)  Cantón Latacunga"
            },
            {
                "codigo": "050102",
                "grupo": "Parroquia",
                "descripcion": "IGNACIO FLORES (PARQUE FLORES) "
            },
            {
                "codigo": "050103",
                "grupo": "Parroquia",
                "descripcion": "JUAN MONTALVO (SAN SEBASTIAN) Cantón Latacunga"
            },
            {
                "codigo": "050104",
                "grupo": "Parroquia",
                "descripcion": "LA MATRIZ (Cantón Latacunga)"
            },
            {
                "codigo": "050105",
                "grupo": "Parroquia",
                "descripcion": "SAN BUENAVENTURA"
            },
            {
                "codigo": "050150",
                "grupo": "Parroquia",
                "descripcion": "LATACUNGA, CABECERA CANTONAL Y CAPITAL PROVINCIAL"
            },
            {
                "codigo": "050151",
                "grupo": "Parroquia",
                "descripcion": "ALAQUES (ALAQUEZ) "
            },
            {
                "codigo": "050152",
                "grupo": "Parroquia",
                "descripcion": "BELISARIO QUEVEDO (GUANAILIN) Cantón Latacunga"
            },
            {
                "codigo": "050153",
                "grupo": "Parroquia",
                "descripcion": "GUAITACAMA (GUAYTACAMA) "
            },
            {
                "codigo": "050154",
                "grupo": "Parroquia",
                "descripcion": "JOSEGUANGO BAJO"
            },
            {
                "codigo": "050156",
                "grupo": "Parroquia",
                "descripcion": "MULALO"
            },
            {
                "codigo": "050157",
                "grupo": "Parroquia",
                "descripcion": "11 DE NOVIEMBRE (ILINCHISI)"
            },
            {
                "codigo": "050158",
                "grupo": "Parroquia",
                "descripcion": "POALO"
            },
            {
                "codigo": "050159",
                "grupo": "Parroquia",
                "descripcion": "SAN JUAN DE PASTOCALLE"
            },
            {
                "codigo": "050161",
                "grupo": "Parroquia",
                "descripcion": "TANICUCHI"
            },
            {
                "codigo": "050162",
                "grupo": "Parroquia",
                "descripcion": "TOACASO"
            },
            {
                "codigo": "0502",
                "grupo": "Cantón",
                "descripcion": "LA MANA"
            },
            {
                "codigo": "050201",
                "grupo": "Parroquia",
                "descripcion": "EL CARMEN (Cantón La Maná)"
            },
            {
                "codigo": "050250",
                "grupo": "Parroquia",
                "descripcion": "LA MANA, CABECERA CANTONAL"
            },
            {
                "codigo": "050251",
                "grupo": "Parroquia",
                "descripcion": "GUASAGANDA (CAB. EN GUASAGANDA CENTRO) "
            },
            {
                "codigo": "0503",
                "grupo": "Cantón",
                "descripcion": "PANGUA"
            },
            {
                "codigo": "050301",
                "grupo": "Parroquia",
                "descripcion": "EL CORAZON  "
            },
            {
                "codigo": "050350",
                "grupo": "Parroquia",
                "descripcion": "EL CORAZON, CABECERA CANTONAL"
            },
            {
                "codigo": "050351",
                "grupo": "Parroquia",
                "descripcion": "MORASPUNGO"
            },
            {
                "codigo": "050352",
                "grupo": "Parroquia",
                "descripcion": "PINLLOPATA"
            },
            {
                "codigo": "050353",
                "grupo": "Parroquia",
                "descripcion": "RAMON CAMPAÑA"
            },
            {
                "codigo": "0504",
                "grupo": "Cantón",
                "descripcion": "PUJILI"
            },
            {
                "codigo": "050450",
                "grupo": "Parroquia",
                "descripcion": "PUJILI, CABECERA CANTONAL"
            },
            {
                "codigo": "050451",
                "grupo": "Parroquia",
                "descripcion": "ANGAMARCA"
            },
            {
                "codigo": "050453",
                "grupo": "Parroquia",
                "descripcion": "GUANGAJE"
            },
            {
                "codigo": "050455",
                "grupo": "Parroquia",
                "descripcion": "LA VICTORIA (Cantón Pujilí)"
            },
            {
                "codigo": "050456",
                "grupo": "Parroquia",
                "descripcion": "PILALO"
            },
            {
                "codigo": "050457",
                "grupo": "Parroquia",
                "descripcion": "TINGO"
            },
            {
                "codigo": "050458",
                "grupo": "Parroquia",
                "descripcion": "ZUMBAHUA"
            },
            {
                "codigo": "0505",
                "grupo": "Cantón",
                "descripcion": "SALCEDO"
            },
            {
                "codigo": "050550",
                "grupo": "Parroquia",
                "descripcion": "SAN MIGUEL, CABECERA CANTONAL SALCEDO"
            },
            {
                "codigo": "050551",
                "grupo": "Parroquia",
                "descripcion": "ANTONIO JOSE HOLGUIN  (SANTA LUCIA)"
            },
            {
                "codigo": "050552",
                "grupo": "Parroquia",
                "descripcion": "CUSUBAMBA"
            },
            {
                "codigo": "050553",
                "grupo": "Parroquia",
                "descripcion": "MULALILLO"
            },
            {
                "codigo": "050554",
                "grupo": "Parroquia",
                "descripcion": "MULLIQUINDIL (SANTA ANA)"
            },
            {
                "codigo": "050555",
                "grupo": "Parroquia",
                "descripcion": "PANSALEO"
            },
            {
                "codigo": "0506",
                "grupo": "Cantón",
                "descripcion": "SAQUISILI"
            },
            {
                "codigo": "050650",
                "grupo": "Parroquia",
                "descripcion": "SAQUISILI, CABECERA CANTONAL"
            },
            {
                "codigo": "050651",
                "grupo": "Parroquia",
                "descripcion": "CANCHAGUA"
            },
            {
                "codigo": "050652",
                "grupo": "Parroquia",
                "descripcion": "CHANTILIN"
            },
            {
                "codigo": "050653",
                "grupo": "Parroquia",
                "descripcion": "COCHAPAMBA (Cantón Saquisilí)"
            },
            {
                "codigo": "0507",
                "grupo": "Cantón",
                "descripcion": "SIGCHOS"
            },
            {
                "codigo": "050750",
                "grupo": "Parroquia",
                "descripcion": "SIGCHOS, CABECERA CANTONAL"
            },
            {
                "codigo": "050751",
                "grupo": "Parroquia",
                "descripcion": "CHUCCHILLAN (CHUGCHILLAN)"
            },
            {
                "codigo": "050752",
                "grupo": "Parroquia",
                "descripcion": "ISINLIBI (INSILIVI)"
            },
            {
                "codigo": "050753",
                "grupo": "Parroquia",
                "descripcion": "LAS PAMPAS"
            },
            {
                "codigo": "050754",
                "grupo": "Parroquia",
                "descripcion": "PALO QUEMADO"
            },
            {
                "codigo": "06",
                "grupo": "Provincia",
                "descripcion": "CHIMBORAZO"
            },
            {
                "codigo": "0601",
                "grupo": "Cantón",
                "descripcion": "RIOBAMBA"
            },
            {
                "codigo": "060101",
                "grupo": "Parroquia",
                "descripcion": "LIZARZABURU"
            },
            {
                "codigo": "060103",
                "grupo": "Parroquia",
                "descripcion": "VELASCO"
            },
            {
                "codigo": "060104",
                "grupo": "Parroquia",
                "descripcion": "VELOZ"
            },
            {
                "codigo": "060105",
                "grupo": "Parroquia",
                "descripcion": "YARUQUIES"
            },
            {
                "codigo": "060106",
                "grupo": "Parroquia",
                "descripcion": "LICAN"
            },
            {
                "codigo": "060150",
                "grupo": "Parroquia",
                "descripcion": "RIOBAMBA, CABECERA CANTONAL Y CAPITAL PROVINCIAL"
            },
            {
                "codigo": "060151",
                "grupo": "Parroquia",
                "descripcion": "CACHA (CAB. EN MACHANGARA) "
            },
            {
                "codigo": "060152",
                "grupo": "Parroquia",
                "descripcion": "CALPI"
            },
            {
                "codigo": "060153",
                "grupo": "Parroquia",
                "descripcion": "CUBIJIES"
            },
            {
                "codigo": "060154",
                "grupo": "Parroquia",
                "descripcion": "FLORES"
            },
            {
                "codigo": "060156",
                "grupo": "Parroquia",
                "descripcion": "LICTO"
            },
            {
                "codigo": "060157",
                "grupo": "Parroquia",
                "descripcion": "PUNGALA"
            },
            {
                "codigo": "060158",
                "grupo": "Parroquia",
                "descripcion": "PUNIN"
            },
            {
                "codigo": "060159",
                "grupo": "Parroquia",
                "descripcion": "QUIMIAG"
            },
            {
                "codigo": "060160",
                "grupo": "Parroquia",
                "descripcion": "SAN JUAN (Cantón Riobamba)"
            },
            {
                "codigo": "060161",
                "grupo": "Parroquia",
                "descripcion": "SAN LUIS (Cantón Riobamba)"
            },
            {
                "codigo": "0602",
                "grupo": "Cantón",
                "descripcion": "ALAUSI"
            },
            {
                "codigo": "060250",
                "grupo": "Parroquia",
                "descripcion": "ALAUSI, CABECERA CANTONAL"
            },
            {
                "codigo": "060251",
                "grupo": "Parroquia",
                "descripcion": "ACHUPALLAS"
            },
            {
                "codigo": "060253",
                "grupo": "Parroquia",
                "descripcion": "GUASUNTOS"
            },
            {
                "codigo": "060254",
                "grupo": "Parroquia",
                "descripcion": "HUIGRA"
            },
            {
                "codigo": "060255",
                "grupo": "Parroquia",
                "descripcion": "MULTITUD"
            },
            {
                "codigo": "060256",
                "grupo": "Parroquia",
                "descripcion": "PISTISHI (NARIZ DEL DIABLO)"
            },
            {
                "codigo": "060257",
                "grupo": "Parroquia",
                "descripcion": "PUMALLACTA"
            },
            {
                "codigo": "060258",
                "grupo": "Parroquia",
                "descripcion": "SEVILLA (Cantón Alausí)"
            },
            {
                "codigo": "060259",
                "grupo": "Parroquia",
                "descripcion": "SIBAMBE"
            },
            {
                "codigo": "060260",
                "grupo": "Parroquia",
                "descripcion": "TIXAN"
            },
            {
                "codigo": "0603",
                "grupo": "Cantón",
                "descripcion": "COLTA"
            },
            {
                "codigo": "060301",
                "grupo": "Parroquia",
                "descripcion": "CAJABAMBA"
            },
            {
                "codigo": "060302",
                "grupo": "Parroquia",
                "descripcion": "SICALPA"
            },
            {
                "codigo": "060350",
                "grupo": "Parroquia",
                "descripcion": "VILLA LA UNION (CAJABAMBA), CABECERA CANTONAL"
            },
            {
                "codigo": "060351",
                "grupo": "Parroquia",
                "descripcion": "CAÑI"
            },
            {
                "codigo": "060352",
                "grupo": "Parroquia",
                "descripcion": "COLUMBE"
            },
            {
                "codigo": "060353",
                "grupo": "Parroquia",
                "descripcion": "JUAN DE VELASCO (PANGOR)"
            },
            {
                "codigo": "060354",
                "grupo": "Parroquia",
                "descripcion": "SANTIAGO DE QUITO (CAB. EN SAN ANTONIO DE QUITO)"
            },
            {
                "codigo": "0604",
                "grupo": "Cantón",
                "descripcion": "CHAMBO"
            },
            {
                "codigo": "060450",
                "grupo": "Parroquia",
                "descripcion": "CHAMBO, CABECERA CANTONAL"
            },
            {
                "codigo": "0605",
                "grupo": "Cantón",
                "descripcion": "CHUNCHI"
            },
            {
                "codigo": "060550",
                "grupo": "Parroquia",
                "descripcion": "CHUNCHI, CABECERA CANTONAL"
            },
            {
                "codigo": "060551",
                "grupo": "Parroquia",
                "descripcion": "CAPZOL"
            },
            {
                "codigo": "060552",
                "grupo": "Parroquia",
                "descripcion": "COMPUD"
            },
            {
                "codigo": "060553",
                "grupo": "Parroquia",
                "descripcion": "GONZOL"
            },
            {
                "codigo": "060554",
                "grupo": "Parroquia",
                "descripcion": "LLAGOS"
            },
            {
                "codigo": "0606",
                "grupo": "Cantón",
                "descripcion": "GUAMOTE"
            },
            {
                "codigo": "060650",
                "grupo": "Parroquia",
                "descripcion": "GUAMOTE, CABECERA CANTONAL"
            },
            {
                "codigo": "060651",
                "grupo": "Parroquia",
                "descripcion": "CEBADAS"
            },
            {
                "codigo": "060652",
                "grupo": "Parroquia",
                "descripcion": "PALMIRA"
            },
            {
                "codigo": "0607",
                "grupo": "Cantón",
                "descripcion": "GUANO"
            },
            {
                "codigo": "060701",
                "grupo": "Parroquia",
                "descripcion": "EL ROSARIO (Cantón Guano)"
            },
            {
                "codigo": "060702",
                "grupo": "Parroquia",
                "descripcion": "LA MATRIZ (Cantón Guano)"
            },
            {
                "codigo": "060750",
                "grupo": "Parroquia",
                "descripcion": "GUANO, CABECERA CANTONAL"
            },
            {
                "codigo": "060751",
                "grupo": "Parroquia",
                "descripcion": "GUANANDO"
            },
            {
                "codigo": "060752",
                "grupo": "Parroquia",
                "descripcion": "ILAPO"
            },
            {
                "codigo": "060753",
                "grupo": "Parroquia",
                "descripcion": "LA PROVIDENCIA (Cantón Guano)"
            },
            {
                "codigo": "060754",
                "grupo": "Parroquia",
                "descripcion": "SAN ANDRES (Cantón Guano)"
            },
            {
                "codigo": "060755",
                "grupo": "Parroquia",
                "descripcion": "SAN GERARDO DE PACAICAGUAN (Cantón Guano)"
            },
            {
                "codigo": "060756",
                "grupo": "Parroquia",
                "descripcion": "SAN ISIDRO DE PATULU (Cantón Guano)"
            },
            {
                "codigo": "060757",
                "grupo": "Parroquia",
                "descripcion": "SAN JOSE DEL CHAZO"
            },
            {
                "codigo": "060759",
                "grupo": "Parroquia",
                "descripcion": "VALPARAISO"
            },
            {
                "codigo": "0608",
                "grupo": "Cantón",
                "descripcion": "PALLATANGA"
            },
            {
                "codigo": "060850",
                "grupo": "Parroquia",
                "descripcion": "PALLATANGA, CABECERA CANTONAL"
            },
            {
                "codigo": "0609",
                "grupo": "Cantón",
                "descripcion": "PENIPE"
            },
            {
                "codigo": "060950",
                "grupo": "Parroquia",
                "descripcion": "PENIPE, CABECERA CANTONAL"
            },
            {
                "codigo": "060951",
                "grupo": "Parroquia",
                "descripcion": "EL ALTAR"
            },
            {
                "codigo": "060952",
                "grupo": "Parroquia",
                "descripcion": "MATUS"
            },
            {
                "codigo": "060953",
                "grupo": "Parroquia",
                "descripcion": "PUELA"
            },
            {
                "codigo": "060954",
                "grupo": "Parroquia",
                "descripcion": "SAN ANTONIO DE BAYUSHIG (Cantón Penipe)"
            },
            {
                "codigo": "060955",
                "grupo": "Parroquia",
                "descripcion": "LA CANDELARIA"
            },
            {
                "codigo": "0610",
                "grupo": "Cantón",
                "descripcion": "CUMANDA"
            },
            {
                "codigo": "061050",
                "grupo": "Parroquia",
                "descripcion": "CUMANDA, CABECERA CANTONAL Cantón Cumandá"
            },
            {
                "codigo": "07",
                "grupo": "Provincia",
                "descripcion": "EL ORO"
            },
            {
                "codigo": "0701",
                "grupo": "Cantón",
                "descripcion": "MACHALA"
            },
            {
                "codigo": "070102",
                "grupo": "Parroquia",
                "descripcion": "MACHALA"
            },
            {
                "codigo": "070103",
                "grupo": "Parroquia",
                "descripcion": "PUERTO BOLIVAR"
            },
            {
                "codigo": "070105",
                "grupo": "Parroquia",
                "descripcion": "EL CAMBIO"
            },
            {
                "codigo": "070150",
                "grupo": "Parroquia",
                "descripcion": "MACHALA, CABECERA CANTONAL Y CAPITAL PROVINCIAL"
            },
            {
                "codigo": "070152",
                "grupo": "Parroquia",
                "descripcion": "EL RETIRO"
            },
            {
                "codigo": "0702",
                "grupo": "Cantón",
                "descripcion": "ARENILLAS"
            },
            {
                "codigo": "070250",
                "grupo": "Parroquia",
                "descripcion": "ARENILLAS, CABECERA CANTONAL"
            },
            {
                "codigo": "070251",
                "grupo": "Parroquia",
                "descripcion": "CHACRAS"
            },
            {
                "codigo": "070254",
                "grupo": "Parroquia",
                "descripcion": "PALMALES"
            },
            {
                "codigo": "070255",
                "grupo": "Parroquia",
                "descripcion": "CARCABON"
            },
            {
                "codigo": "0703",
                "grupo": "Cantón",
                "descripcion": "ATAHUALPA"
            },
            {
                "codigo": "070350",
                "grupo": "Parroquia",
                "descripcion": "PACCHA, CABECERA CANTONAL (Cantón Atahualpa - El Oro)"
            },
            {
                "codigo": "070351",
                "grupo": "Parroquia",
                "descripcion": "AYAPAMBA"
            },
            {
                "codigo": "070352",
                "grupo": "Parroquia",
                "descripcion": "CORDONCILLO"
            },
            {
                "codigo": "070353",
                "grupo": "Parroquia",
                "descripcion": "MILAGRO (Cantón Atahualpa)"
            },
            {
                "codigo": "070354",
                "grupo": "Parroquia",
                "descripcion": "SAN JOSE (Cantón Atahualpa)"
            },
            {
                "codigo": "0704",
                "grupo": "Cantón",
                "descripcion": "BALSAS"
            },
            {
                "codigo": "070450",
                "grupo": "Parroquia",
                "descripcion": "BALSAS, CABECERA CANTONAL"
            },
            {
                "codigo": "070451",
                "grupo": "Parroquia",
                "descripcion": "BELLAMARIA (Cantón Balsas)"
            },
            {
                "codigo": "0705",
                "grupo": "Cantón",
                "descripcion": "CHILLA"
            },
            {
                "codigo": "070550",
                "grupo": "Parroquia",
                "descripcion": "CHILLA, CABECERA CANTONAL"
            },
            {
                "codigo": "0706",
                "grupo": "Cantón",
                "descripcion": "EL GUABO"
            },
            {
                "codigo": "070650",
                "grupo": "Parroquia",
                "descripcion": "EL GUABO, CABECERA CANTONAL"
            },
            {
                "codigo": "070651",
                "grupo": "Parroquia",
                "descripcion": "BARBONES (SUCRE) "
            },
            {
                "codigo": "070652",
                "grupo": "Parroquia",
                "descripcion": "LA IBERIA"
            },
            {
                "codigo": "070653",
                "grupo": "Parroquia",
                "descripcion": "TENDALES (CAB.EN PUERTO TENDALES)"
            },
            {
                "codigo": "070654",
                "grupo": "Parroquia",
                "descripcion": "RIO BONITO"
            },
            {
                "codigo": "0707",
                "grupo": "Cantón",
                "descripcion": "HUAQUILLAS"
            },
            {
                "codigo": "070703",
                "grupo": "Parroquia",
                "descripcion": "HUALTACO"
            },
            {
                "codigo": "070750",
                "grupo": "Parroquia",
                "descripcion": "HUAQUILLAS, CABECERA CANTONAL"
            },
            {
                "codigo": "0708",
                "grupo": "Cantón",
                "descripcion": "MARCABELI"
            },
            {
                "codigo": "070850",
                "grupo": "Parroquia",
                "descripcion": "MARCABELI, CABECERA CANTONAL"
            },
            {
                "codigo": "070851",
                "grupo": "Parroquia",
                "descripcion": "EL INGENIO Cantón Marcabelí)"
            },
            {
                "codigo": "0709",
                "grupo": "Cantón",
                "descripcion": "PASAJE"
            },
            {
                "codigo": "070902",
                "grupo": "Parroquia",
                "descripcion": "LOMA DE FRANCO"
            },
            {
                "codigo": "070904",
                "grupo": "Parroquia",
                "descripcion": "TRES CERRITOS"
            },
            {
                "codigo": "070950",
                "grupo": "Parroquia",
                "descripcion": "PASAJE, CABECERA CANTONAL"
            },
            {
                "codigo": "070951",
                "grupo": "Parroquia",
                "descripcion": "BUENAVISTA (Cantón Pasaje)"
            },
            {
                "codigo": "070952",
                "grupo": "Parroquia",
                "descripcion": "CASACAY"
            },
            {
                "codigo": "070953",
                "grupo": "Parroquia",
                "descripcion": "LA PEAÑA"
            },
            {
                "codigo": "070954",
                "grupo": "Parroquia",
                "descripcion": "PROGRESO"
            },
            {
                "codigo": "070955",
                "grupo": "Parroquia",
                "descripcion": "UZHCURRUMI"
            },
            {
                "codigo": "0710",
                "grupo": "Cantón",
                "descripcion": "PIÑAS"
            },
            {
                "codigo": "071001",
                "grupo": "Parroquia",
                "descripcion": "LA MATRIZ (Cantón Piñas)"
            },
            {
                "codigo": "071002",
                "grupo": "Parroquia",
                "descripcion": "LA SUSAYA"
            },
            {
                "codigo": "071003",
                "grupo": "Parroquia",
                "descripcion": "PIÑAS GRANDE"
            },
            {
                "codigo": "071050",
                "grupo": "Parroquia",
                "descripcion": "PIÑAS, CABECERA CANTONAL"
            },
            {
                "codigo": "071051",
                "grupo": "Parroquia",
                "descripcion": "CAPIRO (CAB. EN LA CAPILLA DE CAPIRO)"
            },
            {
                "codigo": "071052",
                "grupo": "Parroquia",
                "descripcion": "LA BOCANA"
            },
            {
                "codigo": "071053",
                "grupo": "Parroquia",
                "descripcion": "MOROMORO (CAB. EN EL VADO)"
            },
            {
                "codigo": "071054",
                "grupo": "Parroquia",
                "descripcion": "PIEDRAS"
            },
            {
                "codigo": "071055",
                "grupo": "Parroquia",
                "descripcion": "SAN ROQUE (AMBROSIO MALDONADO) Cantón Piñas"
            },
            {
                "codigo": "071056",
                "grupo": "Parroquia",
                "descripcion": "SARACAY"
            },
            {
                "codigo": "0711",
                "grupo": "Cantón",
                "descripcion": "PORTOVELO"
            },
            {
                "codigo": "071150",
                "grupo": "Parroquia",
                "descripcion": "PORTOVELO, CABECERA CANTONAL"
            },
            {
                "codigo": "071151",
                "grupo": "Parroquia",
                "descripcion": "CURTINCAPA"
            },
            {
                "codigo": "071152",
                "grupo": "Parroquia",
                "descripcion": "MORALES"
            },
            {
                "codigo": "071153",
                "grupo": "Parroquia",
                "descripcion": "SALATI"
            },
            {
                "codigo": "0712",
                "grupo": "Cantón",
                "descripcion": "SANTA ROSA"
            },
            {
                "codigo": "071201",
                "grupo": "Parroquia",
                "descripcion": "SANTA ROSA (Cantón Santa Rosa)"
            },
            {
                "codigo": "071250",
                "grupo": "Parroquia",
                "descripcion": "SANTA ROSA, CABECERA CANTONAL"
            },
            {
                "codigo": "071251",
                "grupo": "Parroquia",
                "descripcion": "BELLAVISTA (Cantón Santa Rosa)"
            },
            {
                "codigo": "071253",
                "grupo": "Parroquia",
                "descripcion": "LA AVANZADA"
            },
            {
                "codigo": "071254",
                "grupo": "Parroquia",
                "descripcion": "SAN ANTONIO (Cantón Santa Rosa)"
            },
            {
                "codigo": "071255",
                "grupo": "Parroquia",
                "descripcion": "TORATA"
            },
            {
                "codigo": "071256",
                "grupo": "Parroquia",
                "descripcion": "VICTORIA"
            },
            {
                "codigo": "071257",
                "grupo": "Parroquia",
                "descripcion": "BELLAMARIA (Cantón Santa Rosa)"
            },
            {
                "codigo": "0713",
                "grupo": "Cantón",
                "descripcion": "ZARUMA"
            },
            {
                "codigo": "071350",
                "grupo": "Parroquia",
                "descripcion": "ZARUMA, CABECERA CANTONAL"
            },
            {
                "codigo": "071351",
                "grupo": "Parroquia",
                "descripcion": "ABAÑIN"
            },
            {
                "codigo": "071352",
                "grupo": "Parroquia",
                "descripcion": "ARCAPAMBA"
            },
            {
                "codigo": "071353",
                "grupo": "Parroquia",
                "descripcion": "GUANAZAN"
            },
            {
                "codigo": "071354",
                "grupo": "Parroquia",
                "descripcion": "GUIZHAGUIÑA"
            },
            {
                "codigo": "071355",
                "grupo": "Parroquia",
                "descripcion": "HUERTAS"
            },
            {
                "codigo": "071356",
                "grupo": "Parroquia",
                "descripcion": "MALVAS"
            },
            {
                "codigo": "071357",
                "grupo": "Parroquia",
                "descripcion": "MULUNCAY GRANDE"
            },
            {
                "codigo": "071358",
                "grupo": "Parroquia",
                "descripcion": "SINSAO"
            },
            {
                "codigo": "071359",
                "grupo": "Parroquia",
                "descripcion": "SALVIAS"
            },
            {
                "codigo": "0714",
                "grupo": "Cantón",
                "descripcion": "LAS LAJAS"
            },
            {
                "codigo": "071401",
                "grupo": "Parroquia",
                "descripcion": "LA VICTORIA (Cantón Las Lajas)"
            },
            {
                "codigo": "071450",
                "grupo": "Parroquia",
                "descripcion": "LA VICTORIA, CABECERA CANTONAL"
            },
            {
                "codigo": "071451",
                "grupo": "Parroquia",
                "descripcion": "LA LIBERTAD (Cantón Las Lajas)"
            },
            {
                "codigo": "071452",
                "grupo": "Parroquia",
                "descripcion": "EL PARAISO  (Cantón Las Lajas)"
            },
            {
                "codigo": "071453",
                "grupo": "Parroquia",
                "descripcion": "SAN ISIDRO (Cantón Las Lajas)"
            },
            {
                "codigo": "08",
                "grupo": "Provincia",
                "descripcion": "ESMERALDAS"
            },
            {
                "codigo": "0801",
                "grupo": "Cantón",
                "descripcion": "ESMERALDAS"
            },
            {
                "codigo": "080154",
                "grupo": "Parroquia",
                "descripcion": "CHINCA"
            },
            {
                "codigo": "080159",
                "grupo": "Parroquia",
                "descripcion": "MAJUA"
            },
            {
                "codigo": "080163",
                "grupo": "Parroquia",
                "descripcion": "SAN MATEO (Cantón Esmeraldas)"
            },
            {
                "codigo": "080166",
                "grupo": "Parroquia",
                "descripcion": "TACHINA"
            },
            {
                "codigo": "080168",
                "grupo": "Parroquia",
                "descripcion": "VUELTA LARGA"
            },
            {
                "codigo": "0802",
                "grupo": "Cantón",
                "descripcion": "ELOY ALFARO"
            },
            {
                "codigo": "080254",
                "grupo": "Parroquia",
                "descripcion": "LA TOLA"
            },
            {
                "codigo": "0803",
                "grupo": "Cantón",
                "descripcion": "MUISNE"
            },
            {
                "codigo": "080351",
                "grupo": "Parroquia",
                "descripcion": "BOLIVAR (Cantón Muisne)"
            },
            {
                "codigo": "080358",
                "grupo": "Parroquia",
                "descripcion": "SAN JOSE DE CHAMANGA (CAB. EN CHAMANGA) Cantón Muisne"
            },
            {
                "codigo": "0804",
                "grupo": "Cantón",
                "descripcion": "QUININDE"
            },
            {
                "codigo": "080450",
                "grupo": "Parroquia",
                "descripcion": "ROSA ZARATE (QUININDE), CABECERA CANTONAL"
            },
            {
                "codigo": "080453",
                "grupo": "Parroquia",
                "descripcion": "MALIMPIA"
            },
            {
                "codigo": "080454",
                "grupo": "Parroquia",
                "descripcion": "VICHE"
            },
            {
                "codigo": "080455",
                "grupo": "Parroquia",
                "descripcion": "LA UNION (Cantón Quinindé)"
            },
            {
                "codigo": "0805",
                "grupo": "Cantón",
                "descripcion": "SAN LORENZO"
            },
            {
                "codigo": "080550",
                "grupo": "Parroquia",
                "descripcion": "SAN LORENZO, CABECERA CANTONAL"
            },
            {
                "codigo": "080557",
                "grupo": "Parroquia",
                "descripcion": "MATAJE (CAB. EN SANTANDER)"
            },
            {
                "codigo": "080559",
                "grupo": "Parroquia",
                "descripcion": "SANTA RITA (Cantón San Lorenzo)"
            },
            {
                "codigo": "0806",
                "grupo": "Cantón",
                "descripcion": "ATACAMES"
            },
            {
                "codigo": "080650",
                "grupo": "Parroquia",
                "descripcion": "ATACAMES, CABECERA CANTONAL"
            },
            {
                "codigo": "080651",
                "grupo": "Parroquia",
                "descripcion": "LA UNION (Cantón Atacames)"
            },
            {
                "codigo": "080652",
                "grupo": "Parroquia",
                "descripcion": "SUA  (CAB. EN LA BOCANA) "
            },
            {
                "codigo": "080653",
                "grupo": "Parroquia",
                "descripcion": "TONCHIGÜE"
            },
            {
                "codigo": "080654",
                "grupo": "Parroquia",
                "descripcion": "TONSUPA"
            },
            {
                "codigo": "0807",
                "grupo": "Cantón",
                "descripcion": "RIOVERDE"
            },
            {
                "codigo": "080753",
                "grupo": "Parroquia",
                "descripcion": "LAGARTO"
            },
            {
                "codigo": "080754",
                "grupo": "Parroquia",
                "descripcion": "MONTALVO (CAB. EN HORQUETA)  Cantón Río Verde"
            },
            {
                "codigo": "0808",
                "grupo": "Cantón",
                "descripcion": "LA CONCORDIA"
            },
            {
                "codigo": "080850",
                "grupo": "Parroquia",
                "descripcion": "LA CONCORDIA, CABECERA CANTONAL"
            },
            {
                "codigo": "09",
                "grupo": "Provincia",
                "descripcion": "GUAYAS"
            },
            {
                "codigo": "0901",
                "grupo": "Cantón",
                "descripcion": "GUAYAQUIL"
            },
            {
                "codigo": "090101",
                "grupo": "Parroquia",
                "descripcion": "AYACUCHO (Cantón Guayaquil)"
            },
            {
                "codigo": "090112",
                "grupo": "Parroquia",
                "descripcion": "TARQUI (Cantón Guayaquil)"
            },
            {
                "codigo": "090114",
                "grupo": "Parroquia",
                "descripcion": "XIMENA"
            },
            {
                "codigo": "090150",
                "grupo": "Parroquia",
                "descripcion": "GUAYAQUIL, CABECERA CANTONAL Y CAPITAL PROVINCIAL"
            },
            {
                "codigo": "090152",
                "grupo": "Parroquia",
                "descripcion": "JUAN GOMEZ RENDON (PROGRESO) "
            },
            {
                "codigo": "090153",
                "grupo": "Parroquia",
                "descripcion": "MORRO"
            },
            {
                "codigo": "090156",
                "grupo": "Parroquia",
                "descripcion": "POSORJA"
            },
            {
                "codigo": "090157",
                "grupo": "Parroquia",
                "descripcion": "PUNA"
            },
            {
                "codigo": "090158",
                "grupo": "Parroquia",
                "descripcion": "TENGUEL"
            },
            {
                "codigo": "0902",
                "grupo": "Cantón",
                "descripcion": "ALFREDO BAQUERIZO MORENO (JUJAN)"
            },
            {
                "codigo": "090250",
                "grupo": "Parroquia",
                "descripcion": "ALFREDO BAQUERIZO MORENO (JUJAN), CABECERA CANTONAL"
            },
            {
                "codigo": "0903",
                "grupo": "Cantón",
                "descripcion": "BALAO"
            },
            {
                "codigo": "090350",
                "grupo": "Parroquia",
                "descripcion": "BALAO, CABECERA CANTONAL"
            },
            {
                "codigo": "0904",
                "grupo": "Cantón",
                "descripcion": "BALZAR"
            },
            {
                "codigo": "090450",
                "grupo": "Parroquia",
                "descripcion": "BALZAR, CABECERA CANTONAL"
            },
            {
                "codigo": "0905",
                "grupo": "Cantón",
                "descripcion": "COLIMES"
            },
            {
                "codigo": "090550",
                "grupo": "Parroquia",
                "descripcion": "COLIMES, CABECERA CANTONAL"
            },
            {
                "codigo": "0906",
                "grupo": "Cantón",
                "descripcion": "DAULE"
            },
            {
                "codigo": "090650",
                "grupo": "Parroquia",
                "descripcion": "DAULE, CABECERA CANTONAL"
            },
            {
                "codigo": "090652",
                "grupo": "Parroquia",
                "descripcion": "JUAN BAUTISTA AGUIRRE (LOS TINTOS) "
            },
            {
                "codigo": "090653",
                "grupo": "Parroquia",
                "descripcion": "LAUREL"
            },
            {
                "codigo": "090654",
                "grupo": "Parroquia",
                "descripcion": "LIMONAL"
            },
            {
                "codigo": "090656",
                "grupo": "Parroquia",
                "descripcion": "LOS LOJAS (ENRIQUE BAQUERIZO MORENO)"
            },
            {
                "codigo": "0907",
                "grupo": "Cantón",
                "descripcion": "DURAN"
            },
            {
                "codigo": "090750",
                "grupo": "Parroquia",
                "descripcion": "ELOY ALFARO (DURAN), CABECERA CANTONAL"
            },
            {
                "codigo": "0908",
                "grupo": "Cantón",
                "descripcion": "EL EMPALME"
            },
            {
                "codigo": "090850",
                "grupo": "Parroquia",
                "descripcion": "VELASCO IBARRA (EL EMPALME), CABECERA CANTONAL"
            },
            {
                "codigo": "0909",
                "grupo": "Cantón",
                "descripcion": "EL TRIUNFO"
            },
            {
                "codigo": "090950",
                "grupo": "Parroquia",
                "descripcion": "EL TRIUNFO, CABECERA CANTONAL"
            },
            {
                "codigo": "0910",
                "grupo": "Cantón",
                "descripcion": "MILAGRO"
            },
            {
                "codigo": "091050",
                "grupo": "Parroquia",
                "descripcion": "MILAGRO, CABECERA CANTONAL"
            },
            {
                "codigo": "091051",
                "grupo": "Parroquia",
                "descripcion": "CHOBO"
            },
            {
                "codigo": "091054",
                "grupo": "Parroquia",
                "descripcion": "ROBERTO ASTUDILLO (CAB. EN CRUCE DE VENECIA) "
            },
            {
                "codigo": "0911",
                "grupo": "Cantón",
                "descripcion": "NARANJAL"
            },
            {
                "codigo": "091150",
                "grupo": "Parroquia",
                "descripcion": "NARANJAL, CABECERA CANTONAL"
            },
            {
                "codigo": "091151",
                "grupo": "Parroquia",
                "descripcion": "JESUS MARIA"
            },
            {
                "codigo": "091152",
                "grupo": "Parroquia",
                "descripcion": "SAN CARLOS (Cantón Naranjal)"
            },
            {
                "codigo": "091153",
                "grupo": "Parroquia",
                "descripcion": "SANTA ROSA DE FLANDES"
            },
            {
                "codigo": "091154",
                "grupo": "Parroquia",
                "descripcion": "TAURA"
            },
            {
                "codigo": "0912",
                "grupo": "Cantón",
                "descripcion": "NARANJITO"
            },
            {
                "codigo": "091250",
                "grupo": "Parroquia",
                "descripcion": "NARANJITO, CABECERA CANTONAL"
            },
            {
                "codigo": "0913",
                "grupo": "Cantón",
                "descripcion": "PALESTINA"
            },
            {
                "codigo": "091350",
                "grupo": "Parroquia",
                "descripcion": "PALESTINA,CABECERA CANTONAL"
            },
            {
                "codigo": "0914",
                "grupo": "Cantón",
                "descripcion": "PEDRO CARBO"
            },
            {
                "codigo": "091450",
                "grupo": "Parroquia",
                "descripcion": "PEDRO CARBO, CABECERA CANTONAL"
            },
            {
                "codigo": "0916",
                "grupo": "Cantón",
                "descripcion": "SAMBORONDON"
            },
            {
                "codigo": "091650",
                "grupo": "Parroquia",
                "descripcion": "SAMBORONDON, CABECERA CANTONAL"
            },
            {
                "codigo": "091651",
                "grupo": "Parroquia",
                "descripcion": "TARIFA"
            },
            {
                "codigo": "0918",
                "grupo": "Cantón",
                "descripcion": "SANTA LUCIA"
            },
            {
                "codigo": "091850",
                "grupo": "Parroquia",
                "descripcion": "SANTA LUCIA  "
            },
            {
                "codigo": "0919",
                "grupo": "Cantón",
                "descripcion": "SALITRE (URBINA JADO)"
            },
            {
                "codigo": "091950",
                "grupo": "Parroquia",
                "descripcion": "EL SALITRE (LAS RAMAS),  CABECERA CANTONAL"
            },
            {
                "codigo": "091952",
                "grupo": "Parroquia",
                "descripcion": "LA VICTORIA (ÑAUZA) Cantón Salitre - Guayas"
            },
            {
                "codigo": "0920",
                "grupo": "Cantón",
                "descripcion": "SAN JACINTO DE YAGUACHI"
            },
            {
                "codigo": "092050",
                "grupo": "Parroquia",
                "descripcion": "SAN JACINTO DE YAGUACHI,CABECERA CANTONAL"
            },
            {
                "codigo": "092053",
                "grupo": "Parroquia",
                "descripcion": "GRAL. PEDRO J. MONTERO (BOLICHE) "
            },
            {
                "codigo": "092055",
                "grupo": "Parroquia",
                "descripcion": "YAGUACHI VIEJO (CONE)"
            },
            {
                "codigo": "0921",
                "grupo": "Cantón",
                "descripcion": "PLAYAS"
            },
            {
                "codigo": "092150",
                "grupo": "Parroquia",
                "descripcion": "GENERAL VILLAMIL (PLAYAS), CABECERA CANTONAL"
            },
            {
                "codigo": "0922",
                "grupo": "Cantón",
                "descripcion": "SIMON BOLIVAR"
            },
            {
                "codigo": "092250",
                "grupo": "Parroquia",
                "descripcion": "SIMON BOLIVAR, CABECERA CANTONAL"
            },
            {
                "codigo": "092251",
                "grupo": "Parroquia",
                "descripcion": "CRNEL.LORENZO DE GARAICOA (PEDREGAL)"
            },
            {
                "codigo": "0923",
                "grupo": "Cantón",
                "descripcion": "CORONEL MARCELINO MARIDUEÑA"
            },
            {
                "codigo": "092350",
                "grupo": "Parroquia",
                "descripcion": "CORONEL MARCELINO MARIDUEÑA (SAN CARLOS), CABECERA CANTONAL"
            },
            {
                "codigo": "0924",
                "grupo": "Cantón",
                "descripcion": "LOMAS DE SARGENTILLO"
            },
            {
                "codigo": "092450",
                "grupo": "Parroquia",
                "descripcion": "LOMAS DE SARGENTILLO, CABECERA CANTONAL"
            },
            {
                "codigo": "0925",
                "grupo": "Cantón",
                "descripcion": "NOBOL"
            },
            {
                "codigo": "092550",
                "grupo": "Parroquia",
                "descripcion": "NARCISA DE JESUS, CABECERA CANTONAL"
            },
            {
                "codigo": "0927",
                "grupo": "Cantón",
                "descripcion": "GENERAL ANTONIO ELIZALDE (BUCAY)"
            },
            {
                "codigo": "092750",
                "grupo": "Parroquia",
                "descripcion": "GENERAL ANTONIO ELIZALDE (BUCAY), CABECERA CANTONAL"
            },
            {
                "codigo": "0928",
                "grupo": "Cantón",
                "descripcion": "ISIDRO AYORA"
            },
            {
                "codigo": "092850",
                "grupo": "Parroquia",
                "descripcion": "ISIDRO AYORA, CABECERA CANTONAL"
            },
            {
                "codigo": "10",
                "grupo": "Provincia",
                "descripcion": "IMBABURA"
            },
            {
                "codigo": "1001",
                "grupo": "Cantón",
                "descripcion": "IBARRA"
            },
            {
                "codigo": "100101",
                "grupo": "Parroquia",
                "descripcion": "CARANQUI"
            },
            {
                "codigo": "100102",
                "grupo": "Parroquia",
                "descripcion": "GUAYAQUIL DE ALPACHACA (Cantón Ibarra)"
            },
            {
                "codigo": "100103",
                "grupo": "Parroquia",
                "descripcion": "SAGRARIO (Cantón Ibarra)"
            },
            {
                "codigo": "100104",
                "grupo": "Parroquia",
                "descripcion": "SAN FRANCISCO (Cantón Ibarra)"
            },
            {
                "codigo": "100105",
                "grupo": "Parroquia",
                "descripcion": "LA DOLOROSA DEL PRIORATO"
            },
            {
                "codigo": "100150",
                "grupo": "Parroquia",
                "descripcion": "SAN MIGUEL DE IBARRA, CABECERA CANTONAL Y CAPITAL PROVINCIAL"
            },
            {
                "codigo": "100151",
                "grupo": "Parroquia",
                "descripcion": "AMBUQUI"
            },
            {
                "codigo": "100152",
                "grupo": "Parroquia",
                "descripcion": "ANGOCHAGUA"
            },
            {
                "codigo": "100153",
                "grupo": "Parroquia",
                "descripcion": "CAROLINA"
            },
            {
                "codigo": "100154",
                "grupo": "Parroquia",
                "descripcion": "LA ESPERANZA (Cantón Ibarra)"
            },
            {
                "codigo": "100155",
                "grupo": "Parroquia",
                "descripcion": "LITA"
            },
            {
                "codigo": "100156",
                "grupo": "Parroquia",
                "descripcion": "SALINAS (Cantón Ibarra)"
            },
            {
                "codigo": "100157",
                "grupo": "Parroquia",
                "descripcion": "SAN ANTONIO (Cantón Ibarra)"
            },
            {
                "codigo": "1002",
                "grupo": "Cantón",
                "descripcion": "ANTONIO ANTE"
            },
            {
                "codigo": "100201",
                "grupo": "Parroquia",
                "descripcion": "ANDRADE MARIN  (LOURDES) "
            },
            {
                "codigo": "100202",
                "grupo": "Parroquia",
                "descripcion": "ATUNTAQUI"
            },
            {
                "codigo": "100250",
                "grupo": "Parroquia",
                "descripcion": "ATUNTAQUI, CABECERA CANTONAL"
            },
            {
                "codigo": "100251",
                "grupo": "Parroquia",
                "descripcion": "IMBAYA (SAN LUIS DE COBUENDO) "
            },
            {
                "codigo": "100252",
                "grupo": "Parroquia",
                "descripcion": "SAN FRANCISCO DE NATABUELA (Cantón Antonio Ante)"
            },
            {
                "codigo": "100253",
                "grupo": "Parroquia",
                "descripcion": "SAN JOSE DE CHALTURA (Cantón Antonio Ante)"
            },
            {
                "codigo": "100254",
                "grupo": "Parroquia",
                "descripcion": "SAN ROQUE (Cantón Antonio Ante)"
            },
            {
                "codigo": "1003",
                "grupo": "Cantón",
                "descripcion": "COTACACHI"
            },
            {
                "codigo": "100301",
                "grupo": "Parroquia",
                "descripcion": "SAGRARIO (Cantón Cotacachi)"
            },
            {
                "codigo": "100302",
                "grupo": "Parroquia",
                "descripcion": "SAN FRANCISCO (Cantón Cotacachi)"
            },
            {
                "codigo": "100351",
                "grupo": "Parroquia",
                "descripcion": "APUELA"
            },
            {
                "codigo": "100352",
                "grupo": "Parroquia",
                "descripcion": "GARCIA MORENO  (LLURIMAGUA) Cantón Cotacachi"
            },
            {
                "codigo": "100353",
                "grupo": "Parroquia",
                "descripcion": "IMANTAG"
            },
            {
                "codigo": "100354",
                "grupo": "Parroquia",
                "descripcion": "PEÑAHERRERA"
            },
            {
                "codigo": "100355",
                "grupo": "Parroquia",
                "descripcion": "PLAZA GUTIERREZ  (CALVARIO) "
            },
            {
                "codigo": "100356",
                "grupo": "Parroquia",
                "descripcion": "QUIROGA (Cantón Cotacachi)"
            },
            {
                "codigo": "100357",
                "grupo": "Parroquia",
                "descripcion": "6 DE JULIO DE CUELLAJE (CAB. EN CUELLAJE)"
            },
            {
                "codigo": "100358",
                "grupo": "Parroquia",
                "descripcion": "VACAS GALINDO (EL CHURO) (CAB.EN SAN MIGUEL ALTO)"
            },
            {
                "codigo": "1004",
                "grupo": "Cantón",
                "descripcion": "OTAVALO"
            },
            {
                "codigo": "100401",
                "grupo": "Parroquia",
                "descripcion": "JORDAN"
            },
            {
                "codigo": "100402",
                "grupo": "Parroquia",
                "descripcion": "SAN LUIS (Cantón Otavalo)"
            },
            {
                "codigo": "100450",
                "grupo": "Parroquia",
                "descripcion": "OTAVALO, CABECERA CANTONAL"
            },
            {
                "codigo": "100451",
                "grupo": "Parroquia",
                "descripcion": "DR. MIGUEL EGAS CABEZAS (PEGUCHE) "
            },
            {
                "codigo": "100452",
                "grupo": "Parroquia",
                "descripcion": "EUGENIO ESPEJO (CALPAQUI) "
            },
            {
                "codigo": "100453",
                "grupo": "Parroquia",
                "descripcion": "GONZALEZ SUAREZ (Cantón Otavalo)"
            },
            {
                "codigo": "100454",
                "grupo": "Parroquia",
                "descripcion": "PATAQUI"
            },
            {
                "codigo": "100455",
                "grupo": "Parroquia",
                "descripcion": "SAN JOSE DE QUICHINCHE "
            },
            {
                "codigo": "100456",
                "grupo": "Parroquia",
                "descripcion": "SAN JUAN DE ILUMAN"
            },
            {
                "codigo": "100457",
                "grupo": "Parroquia",
                "descripcion": "SAN PABLO (Cantón Otavalo)"
            },
            {
                "codigo": "100458",
                "grupo": "Parroquia",
                "descripcion": "SAN RAFAEL (Cantón Otavalo)"
            },
            {
                "codigo": "100459",
                "grupo": "Parroquia",
                "descripcion": "SELVA ALEGRE (CAB.EN SAN MIGUEL DE PAMPLONA)"
            },
            {
                "codigo": "1005",
                "grupo": "Cantón",
                "descripcion": "PIMAMPIRO"
            },
            {
                "codigo": "100550",
                "grupo": "Parroquia",
                "descripcion": "PIMAMPIRO, CABECERA CANTONAL"
            },
            {
                "codigo": "100551",
                "grupo": "Parroquia",
                "descripcion": "CHUGA"
            },
            {
                "codigo": "100552",
                "grupo": "Parroquia",
                "descripcion": "MARIANO ACOSTA"
            },
            {
                "codigo": "100553",
                "grupo": "Parroquia",
                "descripcion": "SAN FRANCISCO DE SIGSIPAMBA (Cantón Pimampiro)"
            },
            {
                "codigo": "1006",
                "grupo": "Cantón",
                "descripcion": "SAN MIGUEL DE URCUQUI"
            },
            {
                "codigo": "100650",
                "grupo": "Parroquia",
                "descripcion": "URCUQUI, CABECERA CANTONAL"
            },
            {
                "codigo": "100651",
                "grupo": "Parroquia",
                "descripcion": "CAHUASQUI"
            },
            {
                "codigo": "100652",
                "grupo": "Parroquia",
                "descripcion": "LA MERCED DE BUENOS AIRES (Cantón San Miguel de Urcuquí)"
            },
            {
                "codigo": "100653",
                "grupo": "Parroquia",
                "descripcion": "PABLO ARENAS"
            },
            {
                "codigo": "100654",
                "grupo": "Parroquia",
                "descripcion": "SAN BLAS (Cantón San Miguel de Urcuquí)"
            },
            {
                "codigo": "100655",
                "grupo": "Parroquia",
                "descripcion": "TUMBABIRO"
            },
            {
                "codigo": "11",
                "grupo": "Provincia",
                "descripcion": "LOJA"
            },
            {
                "codigo": "1101",
                "grupo": "Cantón",
                "descripcion": "LOJA "
            },
            {
                "codigo": "110101",
                "grupo": "Parroquia",
                "descripcion": "EL SAGRARIO (Cantón Loja)"
            },
            {
                "codigo": "110102",
                "grupo": "Parroquia",
                "descripcion": "SAN SEBASTIAN (Cantón Loja)"
            },
            {
                "codigo": "110103",
                "grupo": "Parroquia",
                "descripcion": "SUCRE (Cantón Loja)"
            },
            {
                "codigo": "110104",
                "grupo": "Parroquia",
                "descripcion": "VALLE (Cantón Loja)"
            },
            {
                "codigo": "110151",
                "grupo": "Parroquia",
                "descripcion": "CHANTACO"
            },
            {
                "codigo": "110152",
                "grupo": "Parroquia",
                "descripcion": "CHUQUIRIBAMBA"
            },
            {
                "codigo": "110153",
                "grupo": "Parroquia",
                "descripcion": "EL CISNE"
            },
            {
                "codigo": "110154",
                "grupo": "Parroquia",
                "descripcion": "GUALEL"
            },
            {
                "codigo": "110155",
                "grupo": "Parroquia",
                "descripcion": "JIMBILLA (Cantón Loja)"
            },
            {
                "codigo": "110156",
                "grupo": "Parroquia",
                "descripcion": "MALACATOS (VALLADOLID) "
            },
            {
                "codigo": "110157",
                "grupo": "Parroquia",
                "descripcion": "SAN LUCAS"
            },
            {
                "codigo": "110158",
                "grupo": "Parroquia",
                "descripcion": "SAN PEDRO DE VILCABAMBA"
            },
            {
                "codigo": "110159",
                "grupo": "Parroquia",
                "descripcion": "SANTIAGO (Cantón Loja)"
            },
            {
                "codigo": "110160",
                "grupo": "Parroquia",
                "descripcion": "TAQUIL (MIGUEL RIOFRIO)"
            },
            {
                "codigo": "110161",
                "grupo": "Parroquia",
                "descripcion": "VILCABAMBA  (VICTORIA)"
            },
            {
                "codigo": "110162",
                "grupo": "Parroquia",
                "descripcion": "YANGANA (ARSENIO CASTILLO)"
            },
            {
                "codigo": "110163",
                "grupo": "Parroquia",
                "descripcion": "QUINARA"
            },
            {
                "codigo": "1102",
                "grupo": "Cantón",
                "descripcion": "CALVAS "
            },
            {
                "codigo": "110201",
                "grupo": "Parroquia",
                "descripcion": "CARIAMANGA"
            },
            {
                "codigo": "110202",
                "grupo": "Parroquia",
                "descripcion": "CHILE"
            },
            {
                "codigo": "110203",
                "grupo": "Parroquia",
                "descripcion": "SAN VICENTE (Cantón Calvas)"
            },
            {
                "codigo": "110250",
                "grupo": "Parroquia",
                "descripcion": "CARIAMANGA, CABECERA CANTONAL"
            },
            {
                "codigo": "110251",
                "grupo": "Parroquia",
                "descripcion": "COLAISACA"
            },
            {
                "codigo": "110252",
                "grupo": "Parroquia",
                "descripcion": "EL LUCERO"
            },
            {
                "codigo": "110253",
                "grupo": "Parroquia",
                "descripcion": "UTUANA"
            },
            {
                "codigo": "110254",
                "grupo": "Parroquia",
                "descripcion": "SANGUILLIN"
            },
            {
                "codigo": "1103",
                "grupo": "Cantón",
                "descripcion": "CATAMAYO "
            },
            {
                "codigo": "110301",
                "grupo": "Parroquia",
                "descripcion": "CATAMAYO"
            },
            {
                "codigo": "110302",
                "grupo": "Parroquia",
                "descripcion": "SAN JOSE (Cantón Catamayo)"
            },
            {
                "codigo": "110350",
                "grupo": "Parroquia",
                "descripcion": "CATAMAYO (LA TOMA), CABECERA CANTONAL"
            },
            {
                "codigo": "110351",
                "grupo": "Parroquia",
                "descripcion": "EL TAMBO (Cantón Catamayo)"
            },
            {
                "codigo": "110352",
                "grupo": "Parroquia",
                "descripcion": "GUAYQUICHUMA"
            },
            {
                "codigo": "110353",
                "grupo": "Parroquia",
                "descripcion": "SAN PEDRO DE LA BENDITA"
            },
            {
                "codigo": "110354",
                "grupo": "Parroquia",
                "descripcion": "ZAMBI"
            },
            {
                "codigo": "1104",
                "grupo": "Cantón",
                "descripcion": "CELICA "
            },
            {
                "codigo": "110450",
                "grupo": "Parroquia",
                "descripcion": "CELICA, CABECERA CANTONAL"
            },
            {
                "codigo": "110451",
                "grupo": "Parroquia",
                "descripcion": "CRUZPAMBA (CAB. EN CARLOS BUSTAMANTE)"
            },
            {
                "codigo": "110455",
                "grupo": "Parroquia",
                "descripcion": "POZUL (SAN JUAN DE POZUL)"
            },
            {
                "codigo": "110456",
                "grupo": "Parroquia",
                "descripcion": "SABANILLA (Cantón Celica)"
            },
            {
                "codigo": "110457",
                "grupo": "Parroquia",
                "descripcion": "TNTE. MAXIMILIANO RODRIGUEZ LOAIZA "
            },
            {
                "codigo": "1105",
                "grupo": "Cantón",
                "descripcion": "CHAGUARPAMBA "
            },
            {
                "codigo": "110501",
                "grupo": "Parroquia",
                "descripcion": "CHAGUARPAMBA"
            },
            {
                "codigo": "110550",
                "grupo": "Parroquia",
                "descripcion": "CHAGUARPAMBA, CABECERA CANTONAL"
            },
            {
                "codigo": "110551",
                "grupo": "Parroquia",
                "descripcion": "BUENAVISTA (Cantón Chaguarpamba)"
            },
            {
                "codigo": "110552",
                "grupo": "Parroquia",
                "descripcion": "EL ROSARIO (Cantón Chaguarpamba)"
            },
            {
                "codigo": "110553",
                "grupo": "Parroquia",
                "descripcion": "SANTA RUFINA"
            },
            {
                "codigo": "110554",
                "grupo": "Parroquia",
                "descripcion": "AMARILLOS"
            },
            {
                "codigo": "1106",
                "grupo": "Cantón",
                "descripcion": "ESPINDOLA "
            },
            {
                "codigo": "110650",
                "grupo": "Parroquia",
                "descripcion": "AMALUZA, CABECERA CANTONAL Cantón Espíndola"
            },
            {
                "codigo": "110651",
                "grupo": "Parroquia",
                "descripcion": "BELLAVISTA (Cantón Espíndola)"
            },
            {
                "codigo": "110652",
                "grupo": "Parroquia",
                "descripcion": "JIMBURA (Cantón Espíndola)"
            },
            {
                "codigo": "110653",
                "grupo": "Parroquia",
                "descripcion": "SANTA TERESITA"
            },
            {
                "codigo": "110654",
                "grupo": "Parroquia",
                "descripcion": "27 DE ABRIL (CAB. EN LA NARANJA) "
            },
            {
                "codigo": "110655",
                "grupo": "Parroquia",
                "descripcion": "EL INGENIO (Cantón Espíndola)"
            },
            {
                "codigo": "110656",
                "grupo": "Parroquia",
                "descripcion": "EL AIRO"
            },
            {
                "codigo": "1107",
                "grupo": "Cantón",
                "descripcion": "GONZANAMA "
            },
            {
                "codigo": "110750",
                "grupo": "Parroquia",
                "descripcion": "GONZANAMA, CABECERA CANTONAL"
            },
            {
                "codigo": "110751",
                "grupo": "Parroquia",
                "descripcion": "CHANGAIMINA (LA LIBERTAD) "
            },
            {
                "codigo": "110753",
                "grupo": "Parroquia",
                "descripcion": "NAMBACOLA"
            },
            {
                "codigo": "110754",
                "grupo": "Parroquia",
                "descripcion": "PURUNUMA (EGUIGUREN) "
            },
            {
                "codigo": "110756",
                "grupo": "Parroquia",
                "descripcion": "SACAPALCA"
            },
            {
                "codigo": "1108",
                "grupo": "Cantón",
                "descripcion": "MACARA "
            },
            {
                "codigo": "110801",
                "grupo": "Parroquia",
                "descripcion": "GENERAL ELOY ALFARO (SAN SEBASTIAN)  Cantón Macará"
            },
            {
                "codigo": "110802",
                "grupo": "Parroquia",
                "descripcion": "MACARA  (MANUEL ENRIQUE RENGEL SUQUILANDA)"
            },
            {
                "codigo": "110850",
                "grupo": "Parroquia",
                "descripcion": "MACARA, CABECERA CANTONAL"
            },
            {
                "codigo": "110851",
                "grupo": "Parroquia",
                "descripcion": "LARAMA"
            },
            {
                "codigo": "110852",
                "grupo": "Parroquia",
                "descripcion": "LA VICTORIA (Cantón Macará)"
            },
            {
                "codigo": "110853",
                "grupo": "Parroquia",
                "descripcion": "SABIANGO (LA CAPILLA)"
            },
            {
                "codigo": "1109",
                "grupo": "Cantón",
                "descripcion": "PALTAS"
            },
            {
                "codigo": "110901",
                "grupo": "Parroquia",
                "descripcion": "CATACOCHA"
            },
            {
                "codigo": "110902",
                "grupo": "Parroquia",
                "descripcion": "LOURDES"
            },
            {
                "codigo": "110950",
                "grupo": "Parroquia",
                "descripcion": "CATACOCHA, CABECERA CANTONAL"
            },
            {
                "codigo": "110951",
                "grupo": "Parroquia",
                "descripcion": "CANGONAMA"
            },
            {
                "codigo": "110952",
                "grupo": "Parroquia",
                "descripcion": "GUACHANAMA"
            },
            {
                "codigo": "110954",
                "grupo": "Parroquia",
                "descripcion": "LAURO GUERRERO"
            },
            {
                "codigo": "110956",
                "grupo": "Parroquia",
                "descripcion": "ORIANGA"
            },
            {
                "codigo": "110957",
                "grupo": "Parroquia",
                "descripcion": "SAN ANTONIO (Cantón Paltas)"
            },
            {
                "codigo": "110958",
                "grupo": "Parroquia",
                "descripcion": "CASANGA"
            },
            {
                "codigo": "110959",
                "grupo": "Parroquia",
                "descripcion": "YAMANA"
            },
            {
                "codigo": "1110",
                "grupo": "Cantón",
                "descripcion": "PUYANGO"
            },
            {
                "codigo": "111050",
                "grupo": "Parroquia",
                "descripcion": "ALAMOR, CABECERA CANTONAL"
            },
            {
                "codigo": "111051",
                "grupo": "Parroquia",
                "descripcion": "CIANO"
            },
            {
                "codigo": "111052",
                "grupo": "Parroquia",
                "descripcion": "EL ARENAL"
            },
            {
                "codigo": "111053",
                "grupo": "Parroquia",
                "descripcion": "EL LIMO (MARIANA DE JESUS)"
            },
            {
                "codigo": "111054",
                "grupo": "Parroquia",
                "descripcion": "MERCADILLO"
            },
            {
                "codigo": "111055",
                "grupo": "Parroquia",
                "descripcion": "VICENTINO"
            },
            {
                "codigo": "1111",
                "grupo": "Cantón",
                "descripcion": "SARAGURO"
            },
            {
                "codigo": "111101",
                "grupo": "Parroquia",
                "descripcion": "SARAGURO  "
            },
            {
                "codigo": "111150",
                "grupo": "Parroquia",
                "descripcion": "SARAGURO, CABECERA CANTONAL"
            },
            {
                "codigo": "111151",
                "grupo": "Parroquia",
                "descripcion": "EL PARAISO DE CELEN"
            },
            {
                "codigo": "111152",
                "grupo": "Parroquia",
                "descripcion": "EL TABLON  "
            },
            {
                "codigo": "111153",
                "grupo": "Parroquia",
                "descripcion": "LLUZHAPA"
            },
            {
                "codigo": "111154",
                "grupo": "Parroquia",
                "descripcion": "MANU"
            },
            {
                "codigo": "111155",
                "grupo": "Parroquia",
                "descripcion": "SAN ANTONIO DE QUMBE (CUMBE) Cantón Saraguro"
            },
            {
                "codigo": "111156",
                "grupo": "Parroquia",
                "descripcion": "SAN PABLO DE TENTA"
            },
            {
                "codigo": "111157",
                "grupo": "Parroquia",
                "descripcion": "SAN SEBASTIAN DE YULUC"
            },
            {
                "codigo": "111158",
                "grupo": "Parroquia",
                "descripcion": "SELVA ALEGRE (Cantón Saraguro)"
            },
            {
                "codigo": "111159",
                "grupo": "Parroquia",
                "descripcion": "URDANETA (PAQUISHAPA) Cantón Saraguro"
            },
            {
                "codigo": "111160",
                "grupo": "Parroquia",
                "descripcion": "SUMAYPAMBA"
            },
            {
                "codigo": "1112",
                "grupo": "Cantón",
                "descripcion": "SOZORANGA"
            },
            {
                "codigo": "111250",
                "grupo": "Parroquia",
                "descripcion": "SOZORANGA, CABECERA CANTONAL"
            },
            {
                "codigo": "111251",
                "grupo": "Parroquia",
                "descripcion": "NUEVA FATIMA"
            },
            {
                "codigo": "111252",
                "grupo": "Parroquia",
                "descripcion": "TACAMOROS"
            },
            {
                "codigo": "1113",
                "grupo": "Cantón",
                "descripcion": "ZAPOTILLO"
            },
            {
                "codigo": "111350",
                "grupo": "Parroquia",
                "descripcion": "ZAPOTILLO, CABECERA CANTONAL"
            },
            {
                "codigo": "111351",
                "grupo": "Parroquia",
                "descripcion": "CAZADEROS (CAB.EN MANGAURCO) "
            },
            {
                "codigo": "111352",
                "grupo": "Parroquia",
                "descripcion": "GARZAREAL"
            },
            {
                "codigo": "111353",
                "grupo": "Parroquia",
                "descripcion": "LIMONES"
            },
            {
                "codigo": "111354",
                "grupo": "Parroquia",
                "descripcion": "PALETILLAS"
            },
            {
                "codigo": "1114",
                "grupo": "Cantón",
                "descripcion": "PINDAL"
            },
            {
                "codigo": "111450",
                "grupo": "Parroquia",
                "descripcion": "PINDAL, CABECERA CANTONAL"
            },
            {
                "codigo": "111451",
                "grupo": "Parroquia",
                "descripcion": "CHAQUINAL"
            },
            {
                "codigo": "111452",
                "grupo": "Parroquia",
                "descripcion": "12 DE DICIEMBRE (CAB.EN ACHIOTES)"
            },
            {
                "codigo": "1115",
                "grupo": "Cantón",
                "descripcion": "QUILANGA"
            },
            {
                "codigo": "111550",
                "grupo": "Parroquia",
                "descripcion": "QUILANGA, CABECERA CANTONAL"
            },
            {
                "codigo": "111551",
                "grupo": "Parroquia",
                "descripcion": "FUNDOCHAMBA"
            },
            {
                "codigo": "111552",
                "grupo": "Parroquia",
                "descripcion": "SAN ANTONIO DE LAS ARADAS (CAB. EN LAS ARADAS) Cantón Quilanga"
            },
            {
                "codigo": "1116",
                "grupo": "Cantón",
                "descripcion": "OLMEDO (Loja)"
            },
            {
                "codigo": "111650",
                "grupo": "Parroquia",
                "descripcion": "OLMEDO, CABECERA CANTONAL Cantón Olmedo - Loja"
            },
            {
                "codigo": "111651",
                "grupo": "Parroquia",
                "descripcion": "LA TINGUE"
            },
            {
                "codigo": "12",
                "grupo": "Provincia",
                "descripcion": "LOS RIOS"
            },
            {
                "codigo": "1201",
                "grupo": "Cantón",
                "descripcion": "BABAHOYO "
            },
            {
                "codigo": "120101",
                "grupo": "Parroquia",
                "descripcion": "CLEMENTE BAQUERIZO"
            },
            {
                "codigo": "120103",
                "grupo": "Parroquia",
                "descripcion": "BARREIRO"
            },
            {
                "codigo": "120104",
                "grupo": "Parroquia",
                "descripcion": "EL SALTO"
            },
            {
                "codigo": "120150",
                "grupo": "Parroquia",
                "descripcion": "BABAHOYO, CABECERA CANTONAL Y CAPITAL PROVINCIAL"
            },
            {
                "codigo": "120152",
                "grupo": "Parroquia",
                "descripcion": "CARACOL"
            },
            {
                "codigo": "120153",
                "grupo": "Parroquia",
                "descripcion": "FEBRES CORDERO (LAS JUNTAS)(CAB. EN MATA DE CACAO) "
            },
            {
                "codigo": "120154",
                "grupo": "Parroquia",
                "descripcion": "PIMOCHA"
            },
            {
                "codigo": "120155",
                "grupo": "Parroquia",
                "descripcion": "LA UNION (Cantón Babahoyo)"
            },
            {
                "codigo": "1202",
                "grupo": "Cantón",
                "descripcion": "BABA "
            },
            {
                "codigo": "120250",
                "grupo": "Parroquia",
                "descripcion": "BABA, CABECERA CANTONAL"
            },
            {
                "codigo": "120251",
                "grupo": "Parroquia",
                "descripcion": "GUARE"
            },
            {
                "codigo": "120252",
                "grupo": "Parroquia",
                "descripcion": "ISLA DE BEJUCAL"
            },
            {
                "codigo": "1203",
                "grupo": "Cantón",
                "descripcion": "MONTALVO "
            },
            {
                "codigo": "120350",
                "grupo": "Parroquia",
                "descripcion": "MONTALVO, CABECERA CANTONAL"
            },
            {
                "codigo": "1204",
                "grupo": "Cantón",
                "descripcion": "PUEBLOVIEJO"
            },
            {
                "codigo": "120450",
                "grupo": "Parroquia",
                "descripcion": "PUEBLOVIEJO, CABECERA CANTONAL"
            },
            {
                "codigo": "120452",
                "grupo": "Parroquia",
                "descripcion": "SAN JUAN (Cantón Pueblo Viejo)"
            },
            {
                "codigo": "1205",
                "grupo": "Cantón",
                "descripcion": "QUEVEDO "
            },
            {
                "codigo": "120550",
                "grupo": "Parroquia",
                "descripcion": "QUEVEDO, CABECERA CANTONAL"
            },
            {
                "codigo": "120553",
                "grupo": "Parroquia",
                "descripcion": "SAN CARLOS (Cantón Quevedo)"
            },
            {
                "codigo": "1206",
                "grupo": "Cantón",
                "descripcion": "URDANETA"
            },
            {
                "codigo": "120651",
                "grupo": "Parroquia",
                "descripcion": "RICAURTE (Cantón Urdaneta)"
            },
            {
                "codigo": "1207",
                "grupo": "Cantón",
                "descripcion": "VENTANAS"
            },
            {
                "codigo": "120750",
                "grupo": "Parroquia",
                "descripcion": "VENTANAS, CABECERA CANTONAL"
            },
            {
                "codigo": "120752",
                "grupo": "Parroquia",
                "descripcion": "ZAPOTAL"
            },
            {
                "codigo": "1208",
                "grupo": "Cantón",
                "descripcion": "VINCES"
            },
            {
                "codigo": "120850",
                "grupo": "Parroquia",
                "descripcion": "VINCES, CABECERA CANTONAL"
            },
            {
                "codigo": "120851",
                "grupo": "Parroquia",
                "descripcion": "ANTONIO SOTOMAYOR (CAB. EN PLAYAS DE VINCES) "
            },
            {
                "codigo": "1210",
                "grupo": "Cantón",
                "descripcion": "BUENA FE"
            },
            {
                "codigo": "121001",
                "grupo": "Parroquia",
                "descripcion": "SAN JACINTO DE BUENA FE (Cantón Buena Fe)"
            },
            {
                "codigo": "121050",
                "grupo": "Parroquia",
                "descripcion": "SAN JACINTO DE BUENA FE, CABECERA CANTONAL"
            },
            {
                "codigo": "121051",
                "grupo": "Parroquia",
                "descripcion": "PATRICIA PILAR"
            },
            {
                "codigo": "1211",
                "grupo": "Cantón",
                "descripcion": "VALENCIA"
            },
            {
                "codigo": "121150",
                "grupo": "Parroquia",
                "descripcion": "VALENCIA, CABECERA CANTONAL "
            },
            {
                "codigo": "1212",
                "grupo": "Cantón",
                "descripcion": "MOCACHE"
            },
            {
                "codigo": "121250",
                "grupo": "Parroquia",
                "descripcion": "MOCACHE, CABECERA CANTONAL"
            },
            {
                "codigo": "1213",
                "grupo": "Cantón",
                "descripcion": "QUINSALOMA"
            },
            {
                "codigo": "121350",
                "grupo": "Parroquia",
                "descripcion": "QUINSALOMA, CABECERA CANTONAL"
            },
            {
                "codigo": "13",
                "grupo": "Provincia",
                "descripcion": "MANABI"
            },
            {
                "codigo": "1301",
                "grupo": "Cantón",
                "descripcion": "PORTOVIEJO "
            },
            {
                "codigo": "130101",
                "grupo": "Parroquia",
                "descripcion": "PORTOVIEJO"
            },
            {
                "codigo": "130102",
                "grupo": "Parroquia",
                "descripcion": "12 DE MARZO"
            },
            {
                "codigo": "130103",
                "grupo": "Parroquia",
                "descripcion": "COLON"
            },
            {
                "codigo": "130104",
                "grupo": "Parroquia",
                "descripcion": "PICOAZA"
            },
            {
                "codigo": "130105",
                "grupo": "Parroquia",
                "descripcion": "SAN PABLO (Cantón Portoviejo)"
            },
            {
                "codigo": "130151",
                "grupo": "Parroquia",
                "descripcion": "ABDON CALDERON (SAN FRANCISCO)"
            },
            {
                "codigo": "130153",
                "grupo": "Parroquia",
                "descripcion": "CRUCITA"
            },
            {
                "codigo": "130154",
                "grupo": "Parroquia",
                "descripcion": "PUEBLO NUEVO"
            },
            {
                "codigo": "130155",
                "grupo": "Parroquia",
                "descripcion": "RIOCHICO (RIO CHICO)"
            },
            {
                "codigo": "1302",
                "grupo": "Cantón",
                "descripcion": "BOLIVAR  (Prov. Manabí)"
            },
            {
                "codigo": "130250",
                "grupo": "Parroquia",
                "descripcion": "CALCETA, CABECERA CANTONAL"
            },
            {
                "codigo": "130252",
                "grupo": "Parroquia",
                "descripcion": "QUIROGA (Cantón Bolívar - Manabí)"
            },
            {
                "codigo": "1303",
                "grupo": "Cantón",
                "descripcion": "CHONE "
            },
            {
                "codigo": "130301",
                "grupo": "Parroquia",
                "descripcion": "CHONE"
            },
            {
                "codigo": "130352",
                "grupo": "Parroquia",
                "descripcion": "CANUTO"
            },
            {
                "codigo": "130355",
                "grupo": "Parroquia",
                "descripcion": "ELOY ALFARO (Cantón Chone)"
            },
            {
                "codigo": "130356",
                "grupo": "Parroquia",
                "descripcion": "RICAURTE (Cantón Chone)"
            },
            {
                "codigo": "130357",
                "grupo": "Parroquia",
                "descripcion": "SAN ANTONIO (Cantón Chone)"
            },
            {
                "codigo": "1304",
                "grupo": "Cantón",
                "descripcion": "EL CARMEN "
            },
            {
                "codigo": "130450",
                "grupo": "Parroquia",
                "descripcion": "EL CARMEN, CABECERA CANTONAL"
            },
            {
                "codigo": "1305",
                "grupo": "Cantón",
                "descripcion": "FLAVIO ALFARO "
            },
            {
                "codigo": "130550",
                "grupo": "Parroquia",
                "descripcion": "FLAVIO ALFARO, CABECERA CANTONAL"
            },
            {
                "codigo": "130551",
                "grupo": "Parroquia",
                "descripcion": "SAN FRANCISCO DE NOVILLO (CAB. EN NOVILLO)  Cantón Flavio Alfaro"
            },
            {
                "codigo": "1306",
                "grupo": "Cantón",
                "descripcion": "JIPIJAPA "
            },
            {
                "codigo": "130601",
                "grupo": "Parroquia",
                "descripcion": "DR. MIGUEL MORAN LUCIO "
            },
            {
                "codigo": "130650",
                "grupo": "Parroquia",
                "descripcion": "JIPIJAPA, CABECERA CANTONAL"
            },
            {
                "codigo": "130651",
                "grupo": "Parroquia",
                "descripcion": "AMERICA"
            },
            {
                "codigo": "130657",
                "grupo": "Parroquia",
                "descripcion": "PEDRO PABLO GOMEZ"
            },
            {
                "codigo": "130658",
                "grupo": "Parroquia",
                "descripcion": "PUERTO DE CAYO"
            },
            {
                "codigo": "1307",
                "grupo": "Cantón",
                "descripcion": "JUNIN "
            },
            {
                "codigo": "130750",
                "grupo": "Parroquia",
                "descripcion": "JUNIN, CABECERA CANTONAL"
            },
            {
                "codigo": "1308",
                "grupo": "Cantón",
                "descripcion": "MANTA "
            },
            {
                "codigo": "130801",
                "grupo": "Parroquia",
                "descripcion": "LOS ESTEROS"
            },
            {
                "codigo": "130803",
                "grupo": "Parroquia",
                "descripcion": "SAN MATEO (Cantón Manta)"
            },
            {
                "codigo": "130804",
                "grupo": "Parroquia",
                "descripcion": "TARQUI (Cantón Manta)"
            },
            {
                "codigo": "130805",
                "grupo": "Parroquia",
                "descripcion": "ELOY ALFARO (Cantón Manta)"
            },
            {
                "codigo": "130850",
                "grupo": "Parroquia",
                "descripcion": "MANTA, CABECERA CANTONAL"
            },
            {
                "codigo": "130851",
                "grupo": "Parroquia",
                "descripcion": "SAN LORENZO (Cantón Manta)"
            },
            {
                "codigo": "130852",
                "grupo": "Parroquia",
                "descripcion": "SANTA MARIANITA (BOCA DE PACOCHE) Cantón Manta"
            },
            {
                "codigo": "1309",
                "grupo": "Cantón",
                "descripcion": "MONTECRISTI "
            },
            {
                "codigo": "130902",
                "grupo": "Parroquia",
                "descripcion": "MONTECRISTI"
            },
            {
                "codigo": "130950",
                "grupo": "Parroquia",
                "descripcion": "MONTECRISTI, CABECERA CANTONAL"
            },
            {
                "codigo": "1310",
                "grupo": "Cantón",
                "descripcion": "PAJAN "
            },
            {
                "codigo": "131050",
                "grupo": "Parroquia",
                "descripcion": "PAJAN, CABECERA CANTONAL"
            },
            {
                "codigo": "1311",
                "grupo": "Cantón",
                "descripcion": "PICHINCHA "
            },
            {
                "codigo": "131150",
                "grupo": "Parroquia",
                "descripcion": "PICHINCHA, CABECERA CANTONAL"
            },
            {
                "codigo": "1312",
                "grupo": "Cantón",
                "descripcion": "ROCAFUERTE"
            },
            {
                "codigo": "131250",
                "grupo": "Parroquia",
                "descripcion": "ROCAFUERTE, CABECERA CANTONAL"
            },
            {
                "codigo": "1313",
                "grupo": "Cantón",
                "descripcion": "SANTA ANA"
            },
            {
                "codigo": "131301",
                "grupo": "Parroquia",
                "descripcion": "SANTA ANA (Cantón Santa Ana)"
            },
            {
                "codigo": "131302",
                "grupo": "Parroquia",
                "descripcion": "LODANA"
            },
            {
                "codigo": "131350",
                "grupo": "Parroquia",
                "descripcion": "SANTA ANA DE VUELTA LARGA, CABECERA CANTONAL"
            },
            {
                "codigo": "131351",
                "grupo": "Parroquia",
                "descripcion": "AYACUCHO (Cantón Santa Ana)"
            },
            {
                "codigo": "131352",
                "grupo": "Parroquia",
                "descripcion": "HONORATO VASQUEZ (CAB. EN VASQUEZ) Cantón Santa Ana"
            },
            {
                "codigo": "131353",
                "grupo": "Parroquia",
                "descripcion": "LA UNION (Cantón Santa Ana)"
            },
            {
                "codigo": "1314",
                "grupo": "Cantón",
                "descripcion": "SUCRE"
            },
            {
                "codigo": "131402",
                "grupo": "Parroquia",
                "descripcion": "LEONIDAS PLAZA GUTIERREZ"
            },
            {
                "codigo": "1315",
                "grupo": "Cantón",
                "descripcion": "TOSAGUA"
            },
            {
                "codigo": "131550",
                "grupo": "Parroquia",
                "descripcion": "TOSAGUA, CABECERA CANTONAL"
            },
            {
                "codigo": "1316",
                "grupo": "Cantón",
                "descripcion": "24 DE MAYO"
            },
            {
                "codigo": "131650",
                "grupo": "Parroquia",
                "descripcion": "SUCRE, CABECERA CANTONAL (Cantón 24 de Mayo)"
            },
            {
                "codigo": "131651",
                "grupo": "Parroquia",
                "descripcion": "BELLAVISTA (Cantón 24 de mayo)"
            },
            {
                "codigo": "1317",
                "grupo": "Cantón",
                "descripcion": "PEDERNALES"
            },
            {
                "codigo": "131751",
                "grupo": "Parroquia",
                "descripcion": "COJIMIES"
            },
            {
                "codigo": "1318",
                "grupo": "Cantón",
                "descripcion": "OLMEDO (Manabí)"
            },
            {
                "codigo": "131850",
                "grupo": "Parroquia",
                "descripcion": "OLMEDO, CABECERA CANTONAL Cantón Olmedo - Manabí"
            },
            {
                "codigo": "1319",
                "grupo": "Cantón",
                "descripcion": "PUERTO LOPEZ"
            },
            {
                "codigo": "131952",
                "grupo": "Parroquia",
                "descripcion": "SALANGO"
            },
            {
                "codigo": "1320",
                "grupo": "Cantón",
                "descripcion": "JAMA"
            },
            {
                "codigo": "132050",
                "grupo": "Parroquia",
                "descripcion": "JAMA, CABECERA CANTONAL"
            },
            {
                "codigo": "1321",
                "grupo": "Cantón",
                "descripcion": "JARAMIJO"
            },
            {
                "codigo": "132150",
                "grupo": "Parroquia",
                "descripcion": "JARAMIJO, CABECERA CANTONAL"
            },
            {
                "codigo": "1322",
                "grupo": "Cantón",
                "descripcion": "SAN VICENTE"
            },
            {
                "codigo": "132250",
                "grupo": "Parroquia",
                "descripcion": "SAN VICENTE, CABECERA CANTONAL Cantón San Vicente"
            },
            {
                "codigo": "132251",
                "grupo": "Parroquia",
                "descripcion": "CANOA"
            },
            {
                "codigo": "14",
                "grupo": "Provincia",
                "descripcion": "MORONA SANTIAGO"
            },
            {
                "codigo": "1401",
                "grupo": "Cantón",
                "descripcion": "MORONA "
            },
            {
                "codigo": "140150",
                "grupo": "Parroquia",
                "descripcion": "MACAS, CABECERA CANTONAL Y CAPITAL PROVINCIAL "
            },
            {
                "codigo": "140151",
                "grupo": "Parroquia",
                "descripcion": "ALSHI (CAB. EN 9 DE OCTUBRE) "
            },
            {
                "codigo": "140153",
                "grupo": "Parroquia",
                "descripcion": "GENERAL PROAÑO"
            },
            {
                "codigo": "140156",
                "grupo": "Parroquia",
                "descripcion": "SAN ISIDRO (Cantón Morona)"
            },
            {
                "codigo": "140157",
                "grupo": "Parroquia",
                "descripcion": "SEVILLA DON BOSCO"
            },
            {
                "codigo": "140164",
                "grupo": "Parroquia",
                "descripcion": "RIO BLANCO"
            },
            {
                "codigo": "1402",
                "grupo": "Cantón",
                "descripcion": "GUALAQUIZA "
            },
            {
                "codigo": "140202",
                "grupo": "Parroquia",
                "descripcion": "MERCEDES MOLINA"
            },
            {
                "codigo": "140250",
                "grupo": "Parroquia",
                "descripcion": "GUALAQUIZA, CABECERA CANTONAL"
            },
            {
                "codigo": "140254",
                "grupo": "Parroquia",
                "descripcion": "CHIGÜINDA"
            },
            {
                "codigo": "140256",
                "grupo": "Parroquia",
                "descripcion": "NUEVA TARQUI"
            },
            {
                "codigo": "140257",
                "grupo": "Parroquia",
                "descripcion": "SAN MIGUEL DE CUYES"
            },
            {
                "codigo": "1404",
                "grupo": "Cantón",
                "descripcion": "PALORA "
            },
            {
                "codigo": "140455",
                "grupo": "Parroquia",
                "descripcion": "16 DE AGOSTO"
            },
            {
                "codigo": "1405",
                "grupo": "Cantón",
                "descripcion": "SANTIAGO "
            },
            {
                "codigo": "140550",
                "grupo": "Parroquia",
                "descripcion": "SANTIAGO DE MENDEZ, CABECERA CANTONAL"
            },
            {
                "codigo": "140553",
                "grupo": "Parroquia",
                "descripcion": "PATUCA"
            },
            {
                "codigo": "140556",
                "grupo": "Parroquia",
                "descripcion": "TAYUZA"
            },
            {
                "codigo": "1406",
                "grupo": "Cantón",
                "descripcion": "SUCUA "
            },
            {
                "codigo": "140650",
                "grupo": "Parroquia",
                "descripcion": "SUCUA, CABECERA CANTONAL"
            },
            {
                "codigo": "140652",
                "grupo": "Parroquia",
                "descripcion": "HUAMBI"
            },
            {
                "codigo": "140655",
                "grupo": "Parroquia",
                "descripcion": "SANTA MARIANITA DE JESUS (Cantón Sucúa)"
            },
            {
                "codigo": "1408",
                "grupo": "Cantón",
                "descripcion": "SAN JUAN BOSCO"
            },
            {
                "codigo": "140850",
                "grupo": "Parroquia",
                "descripcion": "SAN JUAN BOSCO, CABECERA CANTONAL"
            },
            {
                "codigo": "140852",
                "grupo": "Parroquia",
                "descripcion": "SAN CARLOS DE LIMON   (Cantón San Juan Bosco)"
            },
            {
                "codigo": "1410",
                "grupo": "Cantón",
                "descripcion": "LOGROÑO"
            },
            {
                "codigo": "141050",
                "grupo": "Parroquia",
                "descripcion": "LOGROÑO, CABECERA CANTONAL"
            },
            {
                "codigo": "15",
                "grupo": "Provincia",
                "descripcion": "NAPO"
            },
            {
                "codigo": "1501",
                "grupo": "Cantón",
                "descripcion": "TENA  "
            },
            {
                "codigo": "150150",
                "grupo": "Parroquia",
                "descripcion": "TENA, CABECERA CANTONAL Y CAPITAL PROVINCIAL"
            },
            {
                "codigo": "150154",
                "grupo": "Parroquia",
                "descripcion": "PANO"
            },
            {
                "codigo": "150157",
                "grupo": "Parroquia",
                "descripcion": "TALAG"
            },
            {
                "codigo": "1503",
                "grupo": "Cantón",
                "descripcion": "ARCHIDONA "
            },
            {
                "codigo": "150350",
                "grupo": "Parroquia",
                "descripcion": "ARCHIDONA, CABECERA CANTONAL"
            },
            {
                "codigo": "150352",
                "grupo": "Parroquia",
                "descripcion": "COTUNDO"
            },
            {
                "codigo": "1504",
                "grupo": "Cantón",
                "descripcion": "EL CHACO"
            },
            {
                "codigo": "150450",
                "grupo": "Parroquia",
                "descripcion": "EL CHACO, CABECERA CANTONAL"
            },
            {
                "codigo": "150451",
                "grupo": "Parroquia",
                "descripcion": "GONZALO DIAZ DE PINEDA (EL BOMBON)  Cantón El Chaco"
            },
            {
                "codigo": "150452",
                "grupo": "Parroquia",
                "descripcion": "LINARES"
            },
            {
                "codigo": "150453",
                "grupo": "Parroquia",
                "descripcion": "OYACACHI"
            },
            {
                "codigo": "1507",
                "grupo": "Cantón",
                "descripcion": "QUIJOS"
            },
            {
                "codigo": "150750",
                "grupo": "Parroquia",
                "descripcion": "BAEZA, CABECERA CANTONAL"
            },
            {
                "codigo": "150751",
                "grupo": "Parroquia",
                "descripcion": "COSANGA"
            },
            {
                "codigo": "150752",
                "grupo": "Parroquia",
                "descripcion": "CUYUJA"
            },
            {
                "codigo": "150753",
                "grupo": "Parroquia",
                "descripcion": "PAPALLACTA"
            },
            {
                "codigo": "150754",
                "grupo": "Parroquia",
                "descripcion": "SAN FRANCISCO DE BORJA (VIRGILIO DAVILA) Cantón Quijos"
            },
            {
                "codigo": "1509",
                "grupo": "Cantón",
                "descripcion": "CARLOS JULIO AROSEMENA TOLA"
            },
            {
                "codigo": "150950",
                "grupo": "Parroquia",
                "descripcion": "CARLOS JULIO AROSEMENA TOLA, CABECERA CANTONAL"
            },
            {
                "codigo": "16",
                "grupo": "Provincia",
                "descripcion": "PASTAZA"
            },
            {
                "codigo": "1601",
                "grupo": "Cantón",
                "descripcion": "PASTAZA"
            },
            {
                "codigo": "160150",
                "grupo": "Parroquia",
                "descripcion": "PUYO CABECERA CANTONAL Y CAPITAL PROVINCIAL"
            },
            {
                "codigo": "160166",
                "grupo": "Parroquia",
                "descripcion": "EL TRIUNFO (Cantón Pastaza)"
            },
            {
                "codigo": "1602",
                "grupo": "Cantón",
                "descripcion": "MERA"
            },
            {
                "codigo": "160250",
                "grupo": "Parroquia",
                "descripcion": "MERA, CABECERA CANTONAL"
            },
            {
                "codigo": "160252",
                "grupo": "Parroquia",
                "descripcion": "SHELL"
            },
            {
                "codigo": "1604",
                "grupo": "Cantón",
                "descripcion": "ARAJUNO"
            },
            {
                "codigo": "160451",
                "grupo": "Parroquia",
                "descripcion": "CURARAY"
            },
            {
                "codigo": "17",
                "grupo": "Provincia",
                "descripcion": "PICHINCHA"
            },
            {
                "codigo": "1701",
                "grupo": "Cantón",
                "descripcion": "QUITO"
            },
            {
                "codigo": "170101",
                "grupo": "Parroquia",
                "descripcion": "BELISARIO QUEVEDO (Cantón Quito)"
            },
            {
                "codigo": "170102",
                "grupo": "Parroquia",
                "descripcion": "CARCELEN"
            },
            {
                "codigo": "170103",
                "grupo": "Parroquia",
                "descripcion": "CENTRO HISTORICO (Cantón Quito)"
            },
            {
                "codigo": "170104",
                "grupo": "Parroquia",
                "descripcion": "COCHAPAMBA (Cantón Quito)"
            },
            {
                "codigo": "170105",
                "grupo": "Parroquia",
                "descripcion": "COMITE DEL PUEBLO"
            },
            {
                "codigo": "170106",
                "grupo": "Parroquia",
                "descripcion": "COTOCOLLAO"
            },
            {
                "codigo": "170107",
                "grupo": "Parroquia",
                "descripcion": "CHILIBULO"
            },
            {
                "codigo": "170108",
                "grupo": "Parroquia",
                "descripcion": "CHILLOGALLO"
            },
            {
                "codigo": "170109",
                "grupo": "Parroquia",
                "descripcion": "CHIMBACALLE"
            },
            {
                "codigo": "170110",
                "grupo": "Parroquia",
                "descripcion": "EL CONDADO"
            },
            {
                "codigo": "170111",
                "grupo": "Parroquia",
                "descripcion": "GUAMANI"
            },
            {
                "codigo": "170112",
                "grupo": "Parroquia",
                "descripcion": "IÑAQUITO"
            },
            {
                "codigo": "170113",
                "grupo": "Parroquia",
                "descripcion": "ITCHIMBIA"
            },
            {
                "codigo": "170114",
                "grupo": "Parroquia",
                "descripcion": "JIPIJAPA (Cantón Quito)"
            },
            {
                "codigo": "170115",
                "grupo": "Parroquia",
                "descripcion": "KENNEDY"
            },
            {
                "codigo": "170116",
                "grupo": "Parroquia",
                "descripcion": "LA ARGELIA"
            },
            {
                "codigo": "170117",
                "grupo": "Parroquia",
                "descripcion": "LA CONCEPCION"
            },
            {
                "codigo": "170118",
                "grupo": "Parroquia",
                "descripcion": "LA ECUATORIANA"
            },
            {
                "codigo": "170119",
                "grupo": "Parroquia",
                "descripcion": "LA FERROVIARIA"
            },
            {
                "codigo": "170120",
                "grupo": "Parroquia",
                "descripcion": "LA LIBERTAD (Cantón Quito)"
            },
            {
                "codigo": "170121",
                "grupo": "Parroquia",
                "descripcion": "LA MAGDALENA"
            },
            {
                "codigo": "170124",
                "grupo": "Parroquia",
                "descripcion": "PONCEANO"
            },
            {
                "codigo": "170125",
                "grupo": "Parroquia",
                "descripcion": "PUENGASI"
            },
            {
                "codigo": "170126",
                "grupo": "Parroquia",
                "descripcion": "QUITUMBE"
            },
            {
                "codigo": "170127",
                "grupo": "Parroquia",
                "descripcion": "RUMIPAMBA (Cantón Quito)"
            },
            {
                "codigo": "170128",
                "grupo": "Parroquia",
                "descripcion": "SAN BARTOLO"
            },
            {
                "codigo": "170129",
                "grupo": "Parroquia",
                "descripcion": "SAN ISIDRO DEL INCA (Cantón Quito)"
            },
            {
                "codigo": "170130",
                "grupo": "Parroquia",
                "descripcion": "SANJUAN"
            },
            {
                "codigo": "170131",
                "grupo": "Parroquia",
                "descripcion": "SOLANDA"
            },
            {
                "codigo": "170132",
                "grupo": "Parroquia",
                "descripcion": "TURUBAMBA"
            },
            {
                "codigo": "170150",
                "grupo": "Parroquia",
                "descripcion": "QUITO DISTRITO METROPOLITANO, CABECERA CANTONAL, CAPITAL PROVINCIAL Y DE LA REPUBLICA DEL ECUADOR"
            },
            {
                "codigo": "170151",
                "grupo": "Parroquia",
                "descripcion": "ALANGASI"
            },
            {
                "codigo": "170152",
                "grupo": "Parroquia",
                "descripcion": "AMAGUAÑA"
            },
            {
                "codigo": "170153",
                "grupo": "Parroquia",
                "descripcion": "ATAHUALPA (HABASPAMBA)  Cantón Quito"
            },
            {
                "codigo": "170154",
                "grupo": "Parroquia",
                "descripcion": "CALACALI"
            },
            {
                "codigo": "170155",
                "grupo": "Parroquia",
                "descripcion": "CALDERON (CARAPUNGO)  Cantón Quito"
            },
            {
                "codigo": "170156",
                "grupo": "Parroquia",
                "descripcion": "CONOCOTO"
            },
            {
                "codigo": "170157",
                "grupo": "Parroquia",
                "descripcion": "CUMBAYA"
            },
            {
                "codigo": "170158",
                "grupo": "Parroquia",
                "descripcion": "CHAVEZPAMBA"
            },
            {
                "codigo": "170159",
                "grupo": "Parroquia",
                "descripcion": "CHECA (CHILPA)  Cantón Quito"
            },
            {
                "codigo": "170160",
                "grupo": "Parroquia",
                "descripcion": "EL QUINCHE"
            },
            {
                "codigo": "170161",
                "grupo": "Parroquia",
                "descripcion": "GUALEA"
            },
            {
                "codigo": "170162",
                "grupo": "Parroquia",
                "descripcion": "GUANGOPOLO"
            },
            {
                "codigo": "170163",
                "grupo": "Parroquia",
                "descripcion": "GUAYLLABAMBA"
            },
            {
                "codigo": "170164",
                "grupo": "Parroquia",
                "descripcion": "LA MERCED (Cantón Quito)"
            },
            {
                "codigo": "170165",
                "grupo": "Parroquia",
                "descripcion": "LLANO CHICO"
            },
            {
                "codigo": "170166",
                "grupo": "Parroquia",
                "descripcion": "LLOA"
            },
            {
                "codigo": "170168",
                "grupo": "Parroquia",
                "descripcion": "NANEGAL"
            },
            {
                "codigo": "170169",
                "grupo": "Parroquia",
                "descripcion": "NANEGALITO"
            },
            {
                "codigo": "170170",
                "grupo": "Parroquia",
                "descripcion": "NAYON"
            },
            {
                "codigo": "170171",
                "grupo": "Parroquia",
                "descripcion": "NONO"
            },
            {
                "codigo": "170172",
                "grupo": "Parroquia",
                "descripcion": "PACTO"
            },
            {
                "codigo": "170174",
                "grupo": "Parroquia",
                "descripcion": "PERUCHO"
            },
            {
                "codigo": "170175",
                "grupo": "Parroquia",
                "descripcion": "PIFO"
            },
            {
                "codigo": "170176",
                "grupo": "Parroquia",
                "descripcion": "PINTAG"
            },
            {
                "codigo": "170177",
                "grupo": "Parroquia",
                "descripcion": "POMASQUI"
            },
            {
                "codigo": "170178",
                "grupo": "Parroquia",
                "descripcion": "PUELLARO"
            },
            {
                "codigo": "170179",
                "grupo": "Parroquia",
                "descripcion": "PUEMBO"
            },
            {
                "codigo": "170180",
                "grupo": "Parroquia",
                "descripcion": "SAN ANTONIO (Cantón Quito)"
            },
            {
                "codigo": "170181",
                "grupo": "Parroquia",
                "descripcion": "SAN JOSE DE MINAS"
            },
            {
                "codigo": "170183",
                "grupo": "Parroquia",
                "descripcion": "TABABELA"
            },
            {
                "codigo": "170184",
                "grupo": "Parroquia",
                "descripcion": "TUMBACO"
            },
            {
                "codigo": "170185",
                "grupo": "Parroquia",
                "descripcion": "YARUQUI"
            },
            {
                "codigo": "170186",
                "grupo": "Parroquia",
                "descripcion": "ZAMBIZA"
            },
            {
                "codigo": "1702",
                "grupo": "Cantón",
                "descripcion": "CAYAMBE"
            },
            {
                "codigo": "170201",
                "grupo": "Parroquia",
                "descripcion": "AYORA"
            },
            {
                "codigo": "170202",
                "grupo": "Parroquia",
                "descripcion": "CAYAMBE"
            },
            {
                "codigo": "170203",
                "grupo": "Parroquia",
                "descripcion": "JUAN MONTALVO (Cantón Cayambe)"
            },
            {
                "codigo": "170250",
                "grupo": "Parroquia",
                "descripcion": "CAYAMBE, CABECERA CANTONAL"
            },
            {
                "codigo": "170251",
                "grupo": "Parroquia",
                "descripcion": "ASCAZUBI"
            },
            {
                "codigo": "170252",
                "grupo": "Parroquia",
                "descripcion": "CANGAHUA "
            },
            {
                "codigo": "170253",
                "grupo": "Parroquia",
                "descripcion": "OLMEDO (PESILLO) Cantón Cayambe"
            },
            {
                "codigo": "170254",
                "grupo": "Parroquia",
                "descripcion": "OTON"
            },
            {
                "codigo": "170255",
                "grupo": "Parroquia",
                "descripcion": "SANTA ROSA DE CUZUBAMBA (Cantón Cayambe)"
            },
            {
                "codigo": "1703",
                "grupo": "Cantón",
                "descripcion": "MEJIA"
            },
            {
                "codigo": "170350",
                "grupo": "Parroquia",
                "descripcion": "MACHACHI"
            },
            {
                "codigo": "170351",
                "grupo": "Parroquia",
                "descripcion": "ALOAG"
            },
            {
                "codigo": "170352",
                "grupo": "Parroquia",
                "descripcion": "ALOASI"
            },
            {
                "codigo": "170353",
                "grupo": "Parroquia",
                "descripcion": "CUTUGLAHUA"
            },
            {
                "codigo": "170354",
                "grupo": "Parroquia",
                "descripcion": "EL CHAUPI"
            },
            {
                "codigo": "170355",
                "grupo": "Parroquia",
                "descripcion": "MANUEL CORNEJO ASTORGA (TANDAPI)"
            },
            {
                "codigo": "170356",
                "grupo": "Parroquia",
                "descripcion": "TAMBILLO (Cantón Mejía)"
            },
            {
                "codigo": "170357",
                "grupo": "Parroquia",
                "descripcion": "UYUMBICHO"
            },
            {
                "codigo": "1704",
                "grupo": "Cantón",
                "descripcion": "PEDRO MONCAYO"
            },
            {
                "codigo": "170450",
                "grupo": "Parroquia",
                "descripcion": "TABACUNDO, CABECERA CANTONAL"
            },
            {
                "codigo": "170451",
                "grupo": "Parroquia",
                "descripcion": "LA ESPERANZA (Cantón Pedro Moncayo)"
            },
            {
                "codigo": "170452",
                "grupo": "Parroquia",
                "descripcion": "MALCHINGUI"
            },
            {
                "codigo": "170453",
                "grupo": "Parroquia",
                "descripcion": "TOCACHI"
            },
            {
                "codigo": "170454",
                "grupo": "Parroquia",
                "descripcion": "TUPIGACHI"
            },
            {
                "codigo": "1705",
                "grupo": "Cantón",
                "descripcion": "RUMIÑAHUI"
            },
            {
                "codigo": "170501",
                "grupo": "Parroquia",
                "descripcion": "SANGOLQUI"
            },
            {
                "codigo": "170502",
                "grupo": "Parroquia",
                "descripcion": "SAN PEDRO DE TABOADA"
            },
            {
                "codigo": "170503",
                "grupo": "Parroquia",
                "descripcion": "SAN RAFAEL (Cantón Rumiñahui)"
            },
            {
                "codigo": "170550",
                "grupo": "Parroquia",
                "descripcion": "SANGOLQUI, CABECERA CANTONAL"
            },
            {
                "codigo": "170551",
                "grupo": "Parroquia",
                "descripcion": "COTOGCHOA"
            },
            {
                "codigo": "170552",
                "grupo": "Parroquia",
                "descripcion": "RUMIPAMBA (Cantón Rumiñahui)"
            },
            {
                "codigo": "1707",
                "grupo": "Cantón",
                "descripcion": "SAN MIGUEL DE LOS BANCOS"
            },
            {
                "codigo": "170750",
                "grupo": "Parroquia",
                "descripcion": "SAN MIGUEL DE LOS BANCOS , CABECERA CANTONAL"
            },
            {
                "codigo": "170751",
                "grupo": "Parroquia",
                "descripcion": "MINDO"
            },
            {
                "codigo": "1708",
                "grupo": "Cantón",
                "descripcion": "PEDRO VICENTE MALDONADO"
            },
            {
                "codigo": "170850",
                "grupo": "Parroquia",
                "descripcion": "PEDRO VICENTE MALDONADO, CABECERA CANTONAL"
            },
            {
                "codigo": "1709",
                "grupo": "Cantón",
                "descripcion": "PUERTO QUITO"
            },
            {
                "codigo": "170950",
                "grupo": "Parroquia",
                "descripcion": "PUERTO QUITO, CABECERA CANTONAL"
            },
            {
                "codigo": "18",
                "grupo": "Provincia",
                "descripcion": "TUNGURAHUA"
            },
            {
                "codigo": "1801",
                "grupo": "Cantón",
                "descripcion": "AMBATO"
            },
            {
                "codigo": "180101",
                "grupo": "Parroquia",
                "descripcion": "ATOCHA – FICOA"
            },
            {
                "codigo": "180104",
                "grupo": "Parroquia",
                "descripcion": "HUACHI LORETO"
            },
            {
                "codigo": "180105",
                "grupo": "Parroquia",
                "descripcion": "LA MERCED (Cantón Ambato)"
            },
            {
                "codigo": "180106",
                "grupo": "Parroquia",
                "descripcion": "LA PENINSULA"
            },
            {
                "codigo": "180107",
                "grupo": "Parroquia",
                "descripcion": "MATRIZ (Cantón Ambato)"
            },
            {
                "codigo": "180108",
                "grupo": "Parroquia",
                "descripcion": "PISHILATA"
            },
            {
                "codigo": "180151",
                "grupo": "Parroquia",
                "descripcion": "AMBATILLO"
            },
            {
                "codigo": "180153",
                "grupo": "Parroquia",
                "descripcion": "AUGUSTO N. MARTINEZ (MUNDUGLEO)"
            },
            {
                "codigo": "180154",
                "grupo": "Parroquia",
                "descripcion": "CONSTANTINO FERNANDEZ (CAB. EN CULLITAHUA)"
            },
            {
                "codigo": "180155",
                "grupo": "Parroquia",
                "descripcion": "HUACHI GRANDE"
            },
            {
                "codigo": "180156",
                "grupo": "Parroquia",
                "descripcion": "IZAMBA"
            },
            {
                "codigo": "180157",
                "grupo": "Parroquia",
                "descripcion": "JUAN BENIGNO VELA"
            },
            {
                "codigo": "180158",
                "grupo": "Parroquia",
                "descripcion": "MONTALVO (Cantón Ambato)"
            },
            {
                "codigo": "180159",
                "grupo": "Parroquia",
                "descripcion": "PASA"
            },
            {
                "codigo": "180160",
                "grupo": "Parroquia",
                "descripcion": "PICAIGUA"
            },
            {
                "codigo": "180161",
                "grupo": "Parroquia",
                "descripcion": "PILAGÜIN (PILAGÜIN)"
            },
            {
                "codigo": "180162",
                "grupo": "Parroquia",
                "descripcion": "QUISAPINCHA (QUIZAPINCHA)"
            },
            {
                "codigo": "180163",
                "grupo": "Parroquia",
                "descripcion": "SAN BARTOLOME DE PINLLOG (Cantón Amabto)"
            },
            {
                "codigo": "180164",
                "grupo": "Parroquia",
                "descripcion": "SAN FERNANDO (PASA SAN FERNANDO) Cantón Ambato"
            },
            {
                "codigo": "180165",
                "grupo": "Parroquia",
                "descripcion": "SANTA ROSA (Cantón Ambato)"
            },
            {
                "codigo": "180166",
                "grupo": "Parroquia",
                "descripcion": "TOTORAS"
            },
            {
                "codigo": "180167",
                "grupo": "Parroquia",
                "descripcion": "CUNCHIBAMBA"
            },
            {
                "codigo": "180168",
                "grupo": "Parroquia",
                "descripcion": "UNAMUNCHO"
            },
            {
                "codigo": "1802",
                "grupo": "Cantón",
                "descripcion": "BAÑOS DE AGUA SANTA"
            },
            {
                "codigo": "180250",
                "grupo": "Parroquia",
                "descripcion": "BAÑOS DE AGUA SANTA, CABECERA CANTONAL"
            },
            {
                "codigo": "180251",
                "grupo": "Parroquia",
                "descripcion": "LLIGUA"
            },
            {
                "codigo": "180252",
                "grupo": "Parroquia",
                "descripcion": "RIO NEGRO"
            },
            {
                "codigo": "180253",
                "grupo": "Parroquia",
                "descripcion": "RIO VERDE (Cantón Baños de agua Santa)"
            },
            {
                "codigo": "180254",
                "grupo": "Parroquia",
                "descripcion": "ULBA"
            },
            {
                "codigo": "1803",
                "grupo": "Cantón",
                "descripcion": "CEVALLOS"
            },
            {
                "codigo": "180350",
                "grupo": "Parroquia",
                "descripcion": "CEVALLOS, CABECERA CANTONAL"
            },
            {
                "codigo": "1804",
                "grupo": "Cantón",
                "descripcion": "MOCHA"
            },
            {
                "codigo": "180450",
                "grupo": "Parroquia",
                "descripcion": "MOCHA, CABECERA CANTONAL"
            },
            {
                "codigo": "1805",
                "grupo": "Cantón",
                "descripcion": "PATATE"
            },
            {
                "codigo": "180550",
                "grupo": "Parroquia",
                "descripcion": "PATATE, CABECERA CANTONAL"
            },
            {
                "codigo": "180551",
                "grupo": "Parroquia",
                "descripcion": "EL TRIUNFO (Cantón Patate)"
            },
            {
                "codigo": "180552",
                "grupo": "Parroquia",
                "descripcion": "LOS ANDES (CAB. EN POATUG) "
            },
            {
                "codigo": "180553",
                "grupo": "Parroquia",
                "descripcion": "SUCRE (CAB. EN SUCRE-PATATE URCO) (Cantón Patate)"
            },
            {
                "codigo": "1806",
                "grupo": "Cantón",
                "descripcion": "QUERO"
            },
            {
                "codigo": "180650",
                "grupo": "Parroquia",
                "descripcion": "QUERO, CABECERA CANTONAL"
            },
            {
                "codigo": "180651",
                "grupo": "Parroquia",
                "descripcion": "RUMIPAMBA (Cantón Quero)"
            },
            {
                "codigo": "180652",
                "grupo": "Parroquia",
                "descripcion": "YANAYACU - MOCHAPATA (CAB. EN YANAYACU) "
            },
            {
                "codigo": "1807",
                "grupo": "Cantón",
                "descripcion": "SAN PEDRO DE PELILEO"
            },
            {
                "codigo": "180701",
                "grupo": "Parroquia",
                "descripcion": "PELILEO (Cantón San Pedro de Pelileo)"
            },
            {
                "codigo": "180702",
                "grupo": "Parroquia",
                "descripcion": "PELILEO GRANDE (Cantón San Pedro de Pelileo)"
            },
            {
                "codigo": "180750",
                "grupo": "Parroquia",
                "descripcion": "PELILEO, CABECERA CANTONAL"
            },
            {
                "codigo": "180751",
                "grupo": "Parroquia",
                "descripcion": "BENITEZ (PACHANLICA) "
            },
            {
                "codigo": "180752",
                "grupo": "Parroquia",
                "descripcion": "BOLIVAR (Cantón San Pedro de Pelileo)"
            },
            {
                "codigo": "180753",
                "grupo": "Parroquia",
                "descripcion": "COTALO"
            },
            {
                "codigo": "180754",
                "grupo": "Parroquia",
                "descripcion": "CHIQUICHA (CAB. EN CHIQUICHA GRANDE)"
            },
            {
                "codigo": "180755",
                "grupo": "Parroquia",
                "descripcion": "EL ROSARIO (RUMICHACA) Cantón San Pedro de Pelileo"
            },
            {
                "codigo": "180756",
                "grupo": "Parroquia",
                "descripcion": "GARCIA MORENO (CHUMAQUI) Cantón San Pedro de Pelileo"
            },
            {
                "codigo": "180757",
                "grupo": "Parroquia",
                "descripcion": "GUAMBALO (HUAMBALO)"
            },
            {
                "codigo": "180758",
                "grupo": "Parroquia",
                "descripcion": "SALASACA"
            },
            {
                "codigo": "1808",
                "grupo": "Cantón",
                "descripcion": "SANTIAGO DE PILLARO"
            },
            {
                "codigo": "180801",
                "grupo": "Parroquia",
                "descripcion": "CIUDAD NUEVA"
            },
            {
                "codigo": "180802",
                "grupo": "Parroquia",
                "descripcion": "PILLARO"
            },
            {
                "codigo": "180850",
                "grupo": "Parroquia",
                "descripcion": "PILLARO, CABECERA CANTONAL"
            },
            {
                "codigo": "180851",
                "grupo": "Parroquia",
                "descripcion": "BAQUERIZO MORENO"
            },
            {
                "codigo": "180852",
                "grupo": "Parroquia",
                "descripcion": "EMILIO MARIA TERAN (RUMIPAMBA)"
            },
            {
                "codigo": "180853",
                "grupo": "Parroquia",
                "descripcion": "MARCOS ESPINEL (CHACATA) "
            },
            {
                "codigo": "180854",
                "grupo": "Parroquia",
                "descripcion": "PRESIDENTE URBINA (CHAGRAPAMBA -PATZUCUL)"
            },
            {
                "codigo": "180855",
                "grupo": "Parroquia",
                "descripcion": "SAN ANDRES (Cantón Santiago de Píllaro)"
            },
            {
                "codigo": "180856",
                "grupo": "Parroquia",
                "descripcion": "SAN JOSE DE POALO"
            },
            {
                "codigo": "180857",
                "grupo": "Parroquia",
                "descripcion": "SAN MIGUELITO"
            },
            {
                "codigo": "1809",
                "grupo": "Cantón",
                "descripcion": "TISALEO"
            },
            {
                "codigo": "180950",
                "grupo": "Parroquia",
                "descripcion": "TISALEO, CABECERA CANTONAL"
            },
            {
                "codigo": "19",
                "grupo": "Provincia",
                "descripcion": "ZAMORA CHINCHIPE"
            },
            {
                "codigo": "1901",
                "grupo": "Cantón",
                "descripcion": "ZAMORA"
            },
            {
                "codigo": "190101",
                "grupo": "Parroquia",
                "descripcion": "EL LIMON"
            },
            {
                "codigo": "190102",
                "grupo": "Parroquia",
                "descripcion": "ZAMORA"
            },
            {
                "codigo": "190150",
                "grupo": "Parroquia",
                "descripcion": "ZAMORA, CABECERA CANTONAL Y CAPITAL PROVINCIAL"
            },
            {
                "codigo": "190151",
                "grupo": "Parroquia",
                "descripcion": "CUMBARATZA"
            },
            {
                "codigo": "190152",
                "grupo": "Parroquia",
                "descripcion": "GUADALUPE"
            },
            {
                "codigo": "190153",
                "grupo": "Parroquia",
                "descripcion": "IMBANA (LA VICTORIA DE IMBANA)"
            },
            {
                "codigo": "190155",
                "grupo": "Parroquia",
                "descripcion": "SABANILLA (Cantón Zamora)"
            },
            {
                "codigo": "190156",
                "grupo": "Parroquia",
                "descripcion": "TIMBARA"
            },
            {
                "codigo": "190158",
                "grupo": "Parroquia",
                "descripcion": "SAN CARLOS DE LAS MINAS (Cantón Zamora)"
            },
            {
                "codigo": "1902",
                "grupo": "Cantón",
                "descripcion": "CHINCHIPE"
            },
            {
                "codigo": "190250",
                "grupo": "Parroquia",
                "descripcion": "ZUMBA, CABECERA CANTONAL"
            },
            {
                "codigo": "1903",
                "grupo": "Cantón",
                "descripcion": "NANGARITZA"
            },
            {
                "codigo": "190350",
                "grupo": "Parroquia",
                "descripcion": "GUAYZIMI, CABECERA CANTONAL"
            },
            {
                "codigo": "190351",
                "grupo": "Parroquia",
                "descripcion": "ZURMI"
            },
            {
                "codigo": "1904",
                "grupo": "Cantón",
                "descripcion": "YACUAMBI"
            },
            {
                "codigo": "190450",
                "grupo": "Parroquia",
                "descripcion": "28 DE MAYO (SAN JOSE DE YACUAMBI), CABECERA CANTONAL"
            },
            {
                "codigo": "190451",
                "grupo": "Parroquia",
                "descripcion": "LA PAZ (Cantón Yacuambi)"
            },
            {
                "codigo": "190452",
                "grupo": "Parroquia",
                "descripcion": "TUTUPALI"
            },
            {
                "codigo": "1905",
                "grupo": "Cantón",
                "descripcion": "YANTZAZA"
            },
            {
                "codigo": "190550",
                "grupo": "Parroquia",
                "descripcion": "YANTZAZA (YANZATZA), CABECERA CANTONAL"
            },
            {
                "codigo": "190551",
                "grupo": "Parroquia",
                "descripcion": "CHICAÑA"
            },
            {
                "codigo": "190553",
                "grupo": "Parroquia",
                "descripcion": "LOS ENCUENTROS"
            },
            {
                "codigo": "1906",
                "grupo": "Cantón",
                "descripcion": "EL PANGUI"
            },
            {
                "codigo": "190650",
                "grupo": "Parroquia",
                "descripcion": "EL PANGUI, CABECERA CANTONAL"
            },
            {
                "codigo": "190652",
                "grupo": "Parroquia",
                "descripcion": "PACHICUTZA"
            },
            {
                "codigo": "190653",
                "grupo": "Parroquia",
                "descripcion": "TUNDAYME"
            },
            {
                "codigo": "1907",
                "grupo": "Cantón",
                "descripcion": "CENTINELA DEL CONDOR"
            },
            {
                "codigo": "190750",
                "grupo": "Parroquia",
                "descripcion": "ZUMBI, CABECERA CANTONAL"
            },
            {
                "codigo": "1908",
                "grupo": "Cantón",
                "descripcion": "PALANDA"
            },
            {
                "codigo": "190850",
                "grupo": "Parroquia",
                "descripcion": "PALANDA, CABECERA CANTONAL"
            },
            {
                "codigo": "190851",
                "grupo": "Parroquia",
                "descripcion": "EL PORVENIR DEL CARMEN"
            },
            {
                "codigo": "190852",
                "grupo": "Parroquia",
                "descripcion": "SAN FRANCISCO DEL VERGEL (Cantón Palanda)"
            },
            {
                "codigo": "190853",
                "grupo": "Parroquia",
                "descripcion": "VALLADOLID"
            },
            {
                "codigo": "1909",
                "grupo": "Cantón",
                "descripcion": "PAQUISHA"
            },
            {
                "codigo": "190901",
                "grupo": "Parroquia",
                "descripcion": "PAQUISHA  "
            },
            {
                "codigo": "190950",
                "grupo": "Parroquia",
                "descripcion": "PAQUISHA, CABECERA CANTONAL"
            },
            {
                "codigo": "190951",
                "grupo": "Parroquia",
                "descripcion": "BELLAVISTA (Cantón Paquisha)"
            },
            {
                "codigo": "190952",
                "grupo": "Parroquia",
                "descripcion": "NUEVO QUITO"
            },
            {
                "codigo": "21",
                "grupo": "Provincia",
                "descripcion": "SUCUMBIOS"
            },
            {
                "codigo": "2101",
                "grupo": "Cantón",
                "descripcion": "LAGO AGRIO"
            },
            {
                "codigo": "210150",
                "grupo": "Parroquia",
                "descripcion": "NUEVA LOJA, CABECERA CANTONAL Y CAPITAL PROVINCIAL"
            },
            {
                "codigo": "210158",
                "grupo": "Parroquia",
                "descripcion": "SANTA CECILIA"
            },
            {
                "codigo": "2102",
                "grupo": "Cantón",
                "descripcion": "GONZALO PIZARRO"
            },
            {
                "codigo": "210252",
                "grupo": "Parroquia",
                "descripcion": "GONZALO PIZARRO "
            },
            {
                "codigo": "2104",
                "grupo": "Cantón",
                "descripcion": "SHUSHUFINDI"
            },
            {
                "codigo": "210450",
                "grupo": "Parroquia",
                "descripcion": "SHUSHUFINDI, CABECERA CANTONAL"
            },
            {
                "codigo": "2105",
                "grupo": "Cantón",
                "descripcion": "SUCUMBIOS"
            },
            {
                "codigo": "210551",
                "grupo": "Parroquia",
                "descripcion": "EL PLAYON DE SAN FRANCISCO"
            },
            {
                "codigo": "2107",
                "grupo": "Cantón",
                "descripcion": "CUYABENO"
            },
            {
                "codigo": "210751",
                "grupo": "Parroquia",
                "descripcion": "CUYABENO"
            },
            {
                "codigo": "22",
                "grupo": "Provincia",
                "descripcion": "ORELLANA"
            },
            {
                "codigo": "2201",
                "grupo": "Cantón",
                "descripcion": "ORELLANA"
            },
            {
                "codigo": "220101",
                "grupo": "Parroquia",
                "descripcion": "PUERTO FRANCISCO DE ORELLANA  "
            },
            {
                "codigo": "220150",
                "grupo": "Parroquia",
                "descripcion": "PUERTO FRANCISCO DE ORELLANA (COCA),CABECERA CANTONAL Y CAPITAL PROVINCIAL"
            },
            {
                "codigo": "220159",
                "grupo": "Parroquia",
                "descripcion": "**NUEVO PARAISO"
            },
            {
                "codigo": "2202",
                "grupo": "Cantón",
                "descripcion": "AGUARICO"
            },
            {
                "codigo": "220251",
                "grupo": "Parroquia",
                "descripcion": "CAPITAN AUGUSTO RIVADENEYRA"
            },
            {
                "codigo": "2203",
                "grupo": "Cantón",
                "descripcion": "LA JOYA DE LOS SACHAS"
            },
            {
                "codigo": "220350",
                "grupo": "Parroquia",
                "descripcion": "LA JOYA DE LOS SACHAS, CABECERA CANTONAL"
            },
            {
                "codigo": "220353",
                "grupo": "Parroquia",
                "descripcion": "SAN CARLOS (Cantón La Joya de los Sachas)"
            },
            {
                "codigo": "220354",
                "grupo": "Parroquia",
                "descripcion": "SAN SEBASTIAN DEL COCA"
            },
            {
                "codigo": "220357",
                "grupo": "Parroquia",
                "descripcion": "TRES DE NOVIEMBRE"
            },
            {
                "codigo": "220358",
                "grupo": "Parroquia",
                "descripcion": "UNION MILAGREÑA"
            },
            {
                "codigo": "2204",
                "grupo": "Cantón",
                "descripcion": "LORETO"
            },
            {
                "codigo": "220451",
                "grupo": "Parroquia",
                "descripcion": "AVILA (CAB. EN HUIRUNO) "
            },
            {
                "codigo": "23",
                "grupo": "Provincia",
                "descripcion": "SANTO DOMINGO DE LOS TSACHILAS"
            },
            {
                "codigo": "2301",
                "grupo": "Cantón",
                "descripcion": "SANTO DOMINGO"
            },
            {
                "codigo": "230105",
                "grupo": "Parroquia",
                "descripcion": "RIO VERDE (Cantón Santo Domingo)"
            },
            {
                "codigo": "230106",
                "grupo": "Parroquia",
                "descripcion": "SANTO DOMINGO DE LOS COLORADOS"
            },
            {
                "codigo": "230150",
                "grupo": "Parroquia",
                "descripcion": "SANTO DOMINGO DE LOS COLORADOS, CABECERA CANTONAL"
            },
            {
                "codigo": "230151",
                "grupo": "Parroquia",
                "descripcion": "ALLURIQUIN"
            },
            {
                "codigo": "230152",
                "grupo": "Parroquia",
                "descripcion": "PUERTO LIMON"
            },
            {
                "codigo": "230153",
                "grupo": "Parroquia",
                "descripcion": "LUZ DE AMERICA "
            },
            {
                "codigo": "230155",
                "grupo": "Parroquia",
                "descripcion": "VALLE HERMOSO (Cantón Santo Domingo)"
            },
            {
                "codigo": "230156",
                "grupo": "Parroquia",
                "descripcion": "EL ESFUERZO"
            },
            {
                "codigo": "230157",
                "grupo": "Parroquia",
                "descripcion": "SANTA MARIA DEL TOACHI"
            },
            {
                "codigo": "24",
                "grupo": "Provincia",
                "descripcion": "SANTA ELENA"
            },
            {
                "codigo": "2401",
                "grupo": "Cantón",
                "descripcion": "SANTA ELENA"
            },
            {
                "codigo": "240150",
                "grupo": "Parroquia",
                "descripcion": "SANTA ELENA, CABECERA CANTONAL Cantón Santa Elena"
            },
            {
                "codigo": "240152",
                "grupo": "Parroquia",
                "descripcion": "COLONCHE"
            },
            {
                "codigo": "240153",
                "grupo": "Parroquia",
                "descripcion": "CHANDUY"
            },
            {
                "codigo": "240154",
                "grupo": "Parroquia",
                "descripcion": "MANGLARALTO"
            },
            {
                "codigo": "240155",
                "grupo": "Parroquia",
                "descripcion": "SIMON BOLIVAR (JULIO MORENO) Cantón Santa Elena"
            }
        ];

        _.each(dpas, function (dpa) {
            DPA.insert(dpa);
        });
    }
});
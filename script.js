
var firebaseConfig = {
  apiKey: "AIzaSyAwwgIbTGSp3xmANV7AdiPVVR-bV8tI-Vk",
  authDomain: "home-01-76712.firebaseapp.com",
  databaseURL: "https://home-01-76712-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "home-01-76712",
  storageBucket: "home-01-76712.appspot.com",
  messagingSenderId: "807242481308",
  appId: "1:807242481308:web:ddfd9b596ce60c70e13759",
  measurementId: "G-EBL495PHW1"
};
 
 firebase.initializeApp(firebaseConfig);
 var database = firebase.database();

function writeChk(path, data) {
    database.ref(path).set(data);
}

function readBoolData(path, callback) {
    database.ref(path).on('value', (snapshot) => {
      callback(snapshot.val());
    });
  }

function readStringData(callback) {
    database.ref('HomeAutomation/Timer').on('value', (snapshot) => {
      callback(snapshot.val());
    });
}
 
function writeStringData(value) {
  database.ref('HomeAutomation/Timer').set(value, (error) => {
      if (error) {
          console.error('Veri yazma hatası:', error);
      } else {
          console.log('Veri başarıyla yazıldı.');
      }
  });
}

  // Örnek veri okuma ve checkbox'ları güncelleme
  readBoolData('HomeAutomation/chk00', function(data) {
    var checkbox00 = document.getElementById('checkbox0');
    checkbox00.checked = data;
    var image01 = document.getElementById('image01');
    var image02 = document.getElementById('image02');
    if (checkbox00.checked) {
            image01.style.display = 'block';
            image02.style.display = 'none';
    } else {
            image01.style.display = 'none';   
            image02.style.display = 'block';
    }
  });
  
  readBoolData('HomeAutomation/chk01', function(data) {
    var checkbox01 = document.getElementById('checkbox1');
    checkbox01.checked = data;
    var image01 = document.getElementById('image11');
    var image02 = document.getElementById('image12');
    if (checkbox01.checked) {
            image01.style.display = 'block';
            image02.style.display = 'none';
    } else {
            image01.style.display = 'none';   
            image02.style.display = 'block';
    }
  });
  
  readBoolData('HomeAutomation/chk02', function(data) {
    var checkbox02 = document.getElementById('checkbox2');
    checkbox02.checked = data;
    var image01 = document.getElementById('image21');
    var image02 = document.getElementById('image22');
    if (checkbox02.checked) {
            image01.style.display = 'block';
            image02.style.display = 'none';
    } else {
            image01.style.display = 'none';   
            image02.style.display = 'block';
    }
  });
  
  readBoolData('HomeAutomation/chkTT', function(data) {
    var checkboxt = document.getElementById('checkboxtt');
    checkboxt.checked = data;

    var image = document.getElementById('imgkur');
    var timeInput = document.getElementById('timeBox');
     if (checkboxt.checked) {
          image.src = 'images/work.gif';
          timeInput.style.color = '#FF0000';
     } else {
          image.src = 'images/sleep.png';
          timeInput.style.color = '#0094FF';
     }
  });

        window.onload = function() {
            anlikSaatGoster();
            setInterval(anlikSaatGoster, 1000); // Update every second

            var timeInput = document.getElementById('timeBox');  
            readStringData((data) => {
              timeInput.value = data;;
            });

            var checkbox01 = document.getElementById('checkbox1');
            var image11 = document.getElementById('image11');
            var image12 = document.getElementById('image12');
            if (checkbox01.checked) {
                    image11.style.display = 'block';
                    image12.style.display = 'none';
            } else {
                    image11.style.display = 'none';
                    image12.style.display = 'block';
            }
            
            var checkbox02 = document.getElementById('checkbox2');
            var image21 = document.getElementById('image21');
            var image22 = document.getElementById('image22');

            if (checkbox02.checked) {
                    image21.style.display = 'block';
                    image22.style.display = 'none';
            } else {
                    image21.style.display = 'none';  
                    image22.style.display = 'block';
            }

            var checkbox00 = document.getElementById('checkbox0');            
            var image01 = document.getElementById('image01');
            var image02 = document.getElementById('image02');

            if (checkbox00.checked) {
                    image01.style.display = 'block';
                    image02.style.display = 'none';
            } else {
                    image01.style.display = 'none';   
                    image02.style.display = 'block';
            }
         
            var checkboxtt = document.getElementById('checkboxtt');            
            var image7 = document.getElementById('imgkur');
            var timeInput = document.getElementById('timeBox');
            if (checkboxtt.checked) {
              image7.src = 'images/work.gif';
              timeInput.style.color = '#FF0000';
              writeStringData(timeInput.value);
            } else {
              image7.src = 'images/sleep.png';
              timeInput.style.color = '#0094FF';
            }


        }


        function toggleTT() {
            var image = document.getElementById('imgkur');
            var timeInput = document.getElementById('timeBox');
            var checkboxtt = document.getElementById('checkboxtt').checked;
             if (checkboxtt) {
                  image.src = 'images/work.gif';
                  timeInput.style.color = '#FF0000';
                  writeChk('HomeAutomation/chkTT', true);
                  writeStringData(timeInput.value);
             } else {
                  image.src = 'images/sleep.png';
                  timeInput.style.color = '#0094FF';
                  writeChk('HomeAutomation/chkTT', false);
             }
     }

        function toggleImage1() {
            var checkbox = document.getElementById('checkbox1');
            var image1 = document.getElementById('image11');
            var image2 = document.getElementById('image12');
            if (checkbox.checked) {
                    image1.style.display = 'block';
                    image2.style.display = 'none';
                    writeChk('HomeAutomation/chk01', true);
            } else {
                    image1.style.display = 'none';
                    image2.style.display = 'block';
                    writeChk('HomeAutomation/chk01', false);
            }
        }

        function toggleImage2() {
            var checkbox = document.getElementById('checkbox2');
            var image1 = document.getElementById('image21');
            var image2 = document.getElementById('image22');
            if (checkbox.checked) {
                    image1.style.display = 'block';
                    image2.style.display = 'none';
                    writeChk('HomeAutomation/chk02', true);
            } else {
                    image1.style.display = 'none';  
                    image2.style.display = 'block';
                    writeChk('HomeAutomation/chk02', false);
            }
        }

        function toggleImage0() {
            var checkbox = document.getElementById('checkbox0');
            var image1 = document.getElementById('image01');
            var image2 = document.getElementById('image02');
            if (checkbox.checked) {
                    image1.style.display = 'block';
                    image2.style.display = 'none';
                    writeChk('HomeAutomation/chk00', true);
            } else {
                    image1.style.display = 'none';
                    image2.style.display = 'block';
                    writeChk('HomeAutomation/chk00', false);
            }
        }

        function lampOff() {
          writeChk('HomeAutomation/chk00', false);
          writeChk('HomeAutomation/chk01', false);
          writeChk('HomeAutomation/chk02', false);
          writeChk('HomeAutomation/chkTT', false);
      
          document.getElementById('checkbox0').checked = false;
          document.getElementById('checkbox1').checked = false;
          document.getElementById('checkbox2').checked = false;
          document.getElementById('checkboxtt').checked = false;
          
          document.getElementById('image01').style.display = 'none';
          document.getElementById('image02').style.display = 'block';
          document.getElementById('image11').style.display = 'none';
          document.getElementById('image12').style.display = 'block';
          document.getElementById('image21').style.display = 'none';
          document.getElementById('image22').style.display = 'block';
          document.getElementById('imgkur').src = 'images/sleep.png';
          document.getElementById('timeBox').style.color = '#0094FF';
        }


        function internettenSaatAl(callback) {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        var response = JSON.parse(xhr.responseText);
                        var saat = new Date(response.datetime);
                        callback(saat.getHours());
                    }
                }
                xhr.open('GET', 'https://worldtimeapi.org/api/timezone/Europe/Istanbul', true);
                xhr.send();
            }

            var alarmZamanlayici;
            var alarmAktif = false;
            
            function anlikSaatGoster() {
              var suan = new Date();
              var saat = suan.getHours();
              var dakika = suan.getMinutes();
              var saniye = suan.getSeconds();
              saat = saat < 10 ? '0' + saat : saat;
              dakika = dakika < 10 ? '0' + dakika : dakika;
              saniye = saniye < 10 ? '0' + saniye : saniye;
              var timeStr = saat + ':' + dakika + ':' + saniye;
              document.getElementById('saat').value = timeStr;
            
              // Alarm kontrolü burada yapılacak
              alarmKontrol();
            }


            function alarmKontrol() {
                var suan = new Date();
                var saat = suan.getHours();
                var dakika = suan.getMinutes();
                var timeBoxValue = document.getElementById('timeBox').value;
                var alarmSaat = parseInt(timeBoxValue.split(':')[0], 10);
                var alarmDakika = parseInt(timeBoxValue.split(':')[1], 10);
                var image = document.getElementById('imgkur');
                var timeInput = document.getElementById('timeBox');
                var checkboxtt = document.getElementById('checkboxtt');
  
                if (checkboxtt.checked && saat === alarmSaat && dakika === alarmDakika) {
                  lampOff();
                }   
              }

              
              function anlikSaatGoster() {
                var suan = new Date();
                var saat = suan.getHours();
                var dakika = suan.getMinutes();
                var saniye = suan.getSeconds();
                saat = saat < 10 ? '0' + saat : saat;
                dakika = dakika < 10 ? '0' + dakika : dakika;
                saniye = saniye < 10 ? '0' + saniye : saniye;
                var timeStr = saat + ':' + dakika + ':' + saniye;
                document.getElementById('saat').value = timeStr;
              
                // Alarm kontrolü burada yapılacak
                alarmKontrol();
              }
  
  
              function alarmZamaniAyarla(alarm) {
                  var alarmSaat = alarm.split(':')[0];
                  var alarmDakika = alarm.split(':')[1];
                  if (alarmAktif) {
                    geriSayimBaslat(alarmSaat, alarmDakika);
                  }
              }
              function alarmDurumunuDegistir(checkbox) {
                  alarmAktif = document.getElementById('checkboxtt').checked;
                  if (alarmAktif) {
                      var alarmSaat = document.getElementById('alarmSaat').value.split(':')[0];
                      var alarmDakika = document.getElementById('alarmSaat').value.split(':')[1];
                      geriSayimBaslat(alarmSaat, alarmDakika);
                  } else {
                      clearTimeout(alarmZamanlayici);
                  }
              }
  
              function geriSayimBaslat(alarmSaat, alarmDakika) {
                  var suan = new Date();
                  var suanSaat = suan.getHours();
                  var suanDakika = suan.getMinutes();
                  var alarmSaatInt = parseInt(alarmSaat);
                  var alarmDakikaInt = parseInt(alarmDakika);
                  var suanSaatInt = parseInt(suanSaat);
                  var suanDakikaInt = parseInt(suanDakika);
                  var alarmSuresi = (alarmSaatInt * 60 + alarmDakikaInt) - (suanSaatInt * 60 + suanDakikaInt);
                  alarmZamanlayici = setTimeout(function() {
                      alarmKontrol(suanSaat, suanDakika);
                      alarmAktif = false;
                  }, alarmSuresi * 2000);
              }
/*let currentlySelected = 0;
const riogrande = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75442.55923908003!2d-67.77355746274146!3d-53.77916434276619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbc4b1644a97ec1cb%3A0x48273f4501527328!2sRio%20Grande%2C%20Tierra%20del%20Fuego%20Province%2C%20Argentina!5e0!3m2!1sen!2sil!4v1637276054672!5m2!1sen!2sil";
const saenzpena = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23236.139016999074!2d-58.53384114078898!3d-34.60832067170245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7956ef959eb%3A0x9dee59743b000fa0!2sS%C3%A1enz%20Pe%C3%B1a%2C%20Buenos%20Aires%20Province%2C%20Argentina!5e0!3m2!1sen!2sil!4v1637278782124!5m2!1sen!2sil";
const caba = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.26483379626!2d-58.503338603933585!3d-34.61580373602788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2sil!4v1637278856052!5m2!1sen!2sil";
const kfarsaba = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79801.46141943856!2d34.8950972853064!3d32.17088974700168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d39b32151955f%3A0x8e50c5f354fa376a!2sKefar%20Sava!5e0!3m2!1sen!2sil!4v1637278914764!5m2!1sen!2sil";
const ramatgan = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54094.4936011356!2d34.791283983753075!3d32.07179513465895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4c86e794e4ad%3A0x2d00bf3ee717526f!2sRamat%20Gan!5e0!3m2!1sen!2sil!4v1637278958861!5m2!1sen!2sil";
const bneibrak = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27042.240632795416!2d34.81787434078596!3d32.088715245840945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4a235bcc7279%3A0xa32fca178c423987!2sBnei%20Brak!5e0!3m2!1sen!2sil!4v1637279002053!5m2!1sen!2sil";
const ramathasharon = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27028.419214303092!2d34.81437139086259!3d32.13538829489321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d484be5486675%3A0x8d59955a0441a110!2sRamat%20Hasharon!5e0!3m2!1sen!2sil!4v1637279034077!5m2!1sen!2sil";
const arad = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54577.18459310945!2d35.15041642835936!3d31.246373703886235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1503000200a8ea0b%3A0x232653b7a21c197!2sArad!5e0!3m2!1sen!2sil!4v1637279066509!5m2!1sen!2sil";
const ashkelon = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54332.19800592474!2d34.52963453109703!3d31.66772026805236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15029c5141685e73%3A0xeb72211d3092dc0f!2sAshkelon!5e0!3m2!1sen!2sil!4v1637279100908!5m2!1sen!2sil";
const natanya = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53956.245936954336!2d34.82536848529778!3d32.30472361584422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d400493c075d5%3A0x2cd995be543c3f22!2sNetanya!5e0!3m2!1sen!2sil!4v1637279136692!5m2!1sen!2sil";

const maps = document.querySelectorAll(".gallery-map");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function previous() {
  nextBtn.disabled = false;
  maps[currentlySelected].classList.remove("active");
  currentlySelected--;
  maps[currentlySelected].classList.add("active");

  if (currentlySelected === 0) {
    prevBtn.disabled = true;
  }
}

function next() {
  prevBtn.disabled = false;
  maps[currentlySelected].classList.remove("active");
  currentlySelected++;
  maps[currentlySelected].classList.add("active");

  if (currentlySelected + 1 === maps.length) {
    nextBtn.disabled = true;
  }
}

function init() {
  prevBtn.addEventListener("click", function() {
    previous();
  });

  nextBtn.addEventListener("click", function(e) {
    next();
  });
}

init();*/
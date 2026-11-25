// HTML dosyasından menüyü ve menü butonunu seçiyorum.

const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

// Kullanıcı menü butonuna tıkladığında bu fonksiyon çalışacak.

function toggleMenu() {
	// Menü açıksa kapat, kapalıysa aç.

	if (menu.classList.contains("open")) {
		menu.classList.remove("open");
		menuButton.setAttribute("aria-expanded", "false");
	} else {
		menu.classList.add("open");
		menuButton.setAttribute("aria-expanded", "true");
	}
}

// Menü butonuna tıklama olayı ekliyorum.

menuButton.addEventListener("click", toggleMenu);

// Menüdeki bütün bağlantıları seçiyorum.

const menuLinks = menu.querySelectorAll("a");

// Bir bağlantıya tıklandığında mobil menüyü kapatan fonksiyon.

function closeMenu() {
	menu.classList.remove("open");
	menuButton.setAttribute("aria-expanded", "false");
}

// Her bağlantıya ayrı ayrı tıklama olayı ekliyorum.

for (let i = 0; i < menuLinks.length; i++) {
	menuLinks[i].addEventListener("click", closeMenu);
}

// Footer kısmındaki yıl bilgisini otomatik güncelliyorum.
// Böylece her sene HTML dosyasını değiştirmem gerekmeyecek.

const today = new Date();
const currentYear = today.getFullYear();

document.getElementById("year").textContent = currentYear;

let lang = "bn";
let price = 0;

const prices = {
  25: 30,
  50: 50,
  115: 90,
  240: 175,
  355: 255,
  480: 335,
  505: 365,
  610: 425,
  850: 575,
  1090: 745,
  1240: 810,
  2530: 1650,
  5060: 3295,
  10120: 6394,
};

function selectPack(diamond) {
  price = prices[diamond];
  document.getElementById("priceText").innerText =
    (lang === "bn" ? "মূল্য: ৳" : "Price: ৳") + price;
}

function setLang(l) {
  lang = l;

  if (l === "bn") {
    title.innerText = "দ্রুত ফ্রি ফায়ার ডায়মন্ড টপ-আপ";
    subtitle.innerText = "দ্রুত ও নিরাপদ সার্ভিস";
    ctaText.innerText = "এখনই টপ-আপ করুন";
    topupTitle.innerText = "টপ-আপ তথ্য";
    paymentTitle.innerText = "পেমেন্ট পদ্ধতি";
    submitText.innerText = "অর্ডার সাবমিট করুন";
  } else {
    title.innerText = "Instant Free Fire Diamond Top-Up";
    subtitle.innerText = "Fast & Secure Service";
    ctaText.innerText = "Top-Up Now";
    topupTitle.innerText = "Top-Up Details";
    paymentTitle.innerText = "Payment Method";
    submitText.innerText = "Submit Order";
  }
}

function scrollToTopup() {
  document.getElementById("topup").scrollIntoView({behavior: "smooth"});
}

function submitOrder() {
  const playerId = document.getElementById("playerId").value;
  const method = document.getElementById("paymentMethod").value;
  const txid = document.querySelector("input[placeholder='Transaction ID']").value;

  if (!playerId || price === 0 || !txid) {
    alert(lang === "bn" ? "সব তথ্য পূরণ করুন" : "Please fill all fields");
    return;
  }

  const order = {
    id: Date.now(),
    playerId,
    diamondPrice: price,
    method,
    txid,
    status: "Pending"
  };

  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));

  document.getElementById("status").innerText =
    lang === "bn"
      ? "✅ অর্ডার জমা হয়েছে (Pending)"
      : "✅ Order submitted (Pending)";
}

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * 20;
    const rotateY = (x / rect.width - 0.5) * 20;

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.15)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
  });
});


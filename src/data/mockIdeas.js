const mockIdeas = [
  {
    id: 1,
    title: "AI Co-Founder",
    description: `Bayangkan kamu ingin membangun startup tapi tidak memiliki rekan yang bisa diandalkan. AI Co-Founder adalah asisten berbasis AI yang bertindak seperti rekan pendiri startup: membantu brainstorming ide, menulis pitch deck, merancang MVP, bahkan memberi masukan berdasarkan tren pasar terkini. 
    
    AI ini dilatih dengan data dari ribuan startup yang sukses dan gagal, dilengkapi dengan kemampuan natural language processing dan prediction engine. Setiap percakapan terasa seperti berbicara dengan mentor atau mitra berpengalaman. 
    
    Meskipun masih berupa ide, AI Co-Founder punya potensi besar membantu para solopreneur yang kesulitan membagi beban kerja, atau bahkan tidak memiliki jejaring kuat.`,
    category: "Artificial Intelligence",
    author: "Nindy Eriyani",
    image: "/images/female-avatar.png",
    likes: 293,
  },
  {
    id: 2,
    title: "AI-Powered Interview Simulator",
    description: `Banyak jobseeker merasa gugup ketika menghadapi wawancara kerja. Ide ini menciptakan simulator wawancara kerja menggunakan AI, yang mampu menirukan perilaku dan pertanyaan dari HRD perusahaan besar. Bahkan, bisa disesuaikan dengan jenis pekerjaan atau level posisi. 
      
      Dengan fitur analisis ekspresi wajah, intonasi suara, dan kejelasan jawaban, simulator ini memberikan feedback mendalam dan personal. Hasilnya: pengguna jadi lebih percaya diri dan siap menghadapi interview sungguhan.
      
      Produk ini bisa dikembangkan untuk platform B2C, atau dijual ke institusi pendidikan dan bimbingan karier.`,
    category: "Artificial Intelligence",
    author: "Andi Jaedil",
    image: "/images/male-avatar.png",
    likes: 890,
  },
  {
    id: 3,
    title: "Micro-SaaS Builder for Non-Coders",
    description: `Micro-SaaS Builder adalah platform untuk siapa saja yang ingin membangun produk SaaS skala kecil tanpa perlu coding. Dengan drag-and-drop builder, template SaaS umum (seperti invoice generator, CRM sederhana), dan sistem deploy otomatis ke cloud, siapa pun bisa meluncurkan produk digital dalam hitungan jam. 
      
      Platform ini menyasar individu yang punya ide, tapi tidak punya kemampuan teknis. Bisa menjadi alat belajar dan juga ladang cuan pasif. 
      
      Lebih dari sekadar no-code tool, platform ini menggabungkan fitur riset pasar dan rekomendasi monetisasi.`,
    category: "Software as a Service",
    author: "Andi Nanda",
    image: "/images/male-avatar.png",
    likes: 742,
  },
  {
    id: 4,
    title: "Subscription Dashboard Aggregator",
    description: `Kita berlangganan banyak layanan: Netflix, Canva, Spotify, Google One, bahkan plugin VSCode. Sering kali lupa kapan tagihan masuk. Subscription Aggregator menyatukan semua langganan dalam satu dashboard, memberi notifikasi sebelum tagihan jatuh tempo. 
      
      Fitur unggulan lainnya: analisis pengeluaran bulanan untuk langganan, rekomendasi downgrade atau bundling, dan deteksi langganan yang tidak digunakan. 
      
      Solusi ini sangat dibutuhkan di era digital saat langganan menjadi gaya hidup.`,
    category: "Software as a Service",
    author: "Fitria Dina",
    image: "/images/female-avatar.png",
    likes: 166,
  },
  {
    id: 5,
    title: "Skill-to-Project Matching Platform",
    description: `Alih-alih menyuruh siswa belajar teori, platform ini mencocokkan keterampilan siswa dengan proyek nyata dari UMKM, NGO, atau startup. Misalnya, pelajar desain bisa ditugaskan membuat logo untuk toko lokal, dan pelajar coding membangun website sederhana.
      
      Dengan pendekatan learning-by-doing, siswa mendapat portofolio nyata yang bisa digunakan untuk melamar kerja. UMKM pun terbantu mendapatkan bantuan teknis secara gratis atau murah. 
      
      Platform ini bisa menjadi jembatan antara dunia pendidikan dan industri.`,
    category: "EdTech",
    author: "Devi Miftah",
    image: "/images/female-avatar.png",
    likes: 203,
  },
  {
    id: 6,
    title: "Personalized Learning AI Mentor",
    description: `Belajar secara mandiri seringkali membuat bingung: mana yang harus dipelajari dulu? AI Mentor adalah chatbot pintar yang memantau progress belajar, memberi saran materi selanjutnya, dan menyemangati pengguna berdasarkan gaya belajar mereka. 
      
      Mirip seperti punya guru privat, tapi 24/7 dan tanpa batas. Teknologi ini bisa dipasang di aplikasi belajar seperti Coursera atau platform lokal. 
      
      AI ini tidak hanya untuk pelajar, tapi juga profesional yang ingin upskill.`,
    category: "EdTech",
    author: "Faldi Firman",
    image: "/images/male-avatar.png",
    likes: 420,
  },
  {
    id: 7,
    title: "Debug Visualizer for Front-End Developers",
    description: `Sering frustrasi debugging CSS atau state di React? Tool ini memvisualisasikan perubahan DOM, alur re-render, dan style conflicts secara real-time langsung di browser saat development. 
      
      Tool ini bisa menjadi ekstensi VSCode atau Chrome DevTools extension. Developer tidak perlu lagi console.log() di setiap baris atau menebak perubahan state. 
      
      Bisa digunakan oleh pemula maupun senior engineer. Potensi open-source juga besar.`,
    category: "Developer Tools",
    author: "Nurhidayat",
    image: "/images/male-avatar.png",
    likes: 900,
  },
  {
    id: 8,
    title: "Git Commit Summarizer AI",
    description: `Setiap kali developer push commit ke Git, AI ini otomatis menulis ringkasan perubahan secara manusiawi. Misalnya: “Fixed navbar alignment on mobile” atau “Refactored user auth logic”. 
      
      Dengan NLP dan kode analysis engine, AI membaca perubahan file dan memberikan deskripsi commit yang mudah dibaca rekan satu tim. 
      
      Tool ini membantu menjaga konsistensi log Git, meningkatkan kolaborasi tim, dan mendukung praktik dokumentasi yang baik.`,
    category: "Developer Tools",
    author: "Selfiana",
    image: "/images/female-avatar.png",
    likes: 700,
  },
  {
    id: 9,
    title: "Mental Health Voice Journal",
    description: `Platform ini memungkinkan pengguna untuk merekam perasaan mereka secara suara, yang kemudian dianalisis oleh AI untuk mendeteksi emosi, stres, atau potensi depresi. AI akan memberi rekomendasi jurnal, afirmasi, atau bahkan mengarahkan ke konselor profesional bila dibutuhkan. 
    
    Tidak semua orang bisa menulis atau nyaman mengetik. Berbicara bisa lebih alami, dan membantu proses refleksi diri lebih dalam. 
    
    Sangat cocok dikembangkan untuk remaja dan dewasa muda yang tidak terbiasa membuka diri secara eksplisit.`,
    category: "Social Tech",
    author: "Awalia Putri",
    image: "/images/female-avatar.png",
    likes: 512,
  },
  {
    id: 10,
    title: "Hyperlocal Skill Exchange App",
    description:
      `Aplikasi ini mempertemukan orang-orang dalam satu lingkungan (RT/RW/kampus) yang bisa saling tukar keterampilan. Misalnya, kamu bisa mengajari desain grafis, dan belajar memasak dari tetanggamu. 
      
      Semua dilakukan melalui sistem barter skill, tanpa uang. Bisa ditambahkan sistem “like” dan reputasi agar pengguna lebih aktif. 
      
      Dengan gamifikasi, komunitas lokal bisa jadi lebih solid dan saling memberdayakan.`,
    category: "Social Tech",
    author: "Asmar Abdurrahman",
    image: "/images/male-avatar.png",
    likes: "999",
  },
];

export default mockIdeas;

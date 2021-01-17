-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 17 Jan 2021 pada 22.24
-- Versi server: 10.4.6-MariaDB
-- Versi PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `e_recruitment`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `company`
--

CREATE TABLE `company` (
  `id_company` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `no_hp` varchar(50) NOT NULL,
  `github` varchar(255) NOT NULL,
  `image` varchar(191) NOT NULL,
  `location` text NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `company`
--

INSERT INTO `company` (`id_company`, `id_user`, `name`, `no_hp`, `github`, `image`, `location`, `description`) VALUES
(20, 71, ' PT. Sumber rejei', ' 0987654321', ' github.com', 'img_1610806825062.png', ' Denpasar Bali', ' Perusahaan Yang Bergerak pada produksi Lilin');

-- --------------------------------------------------------

--
-- Struktur dari tabel `engineer`
--

CREATE TABLE `engineer` (
  `id_engineer` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `location` varchar(100) NOT NULL,
  `birth` date NOT NULL,
  `e_salary` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `engineer`
--

INSERT INTO `engineer` (`id_engineer`, `id_user`, `name`, `description`, `location`, `birth`, `e_salary`, `image`, `date_created`, `date_updated`) VALUES
(64, 69, 'Hendro', 'Android Developer', 'Denpasar Bali', '0000-00-00', 0, 'img_1610803575799.png', '0000-00-00 00:00:00', '2021-01-16 20:26:15'),
(65, 70, '', '', '', '0000-00-00', 0, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `hire`
--

CREATE TABLE `hire` (
  `hr_id` int(11) UNSIGNED NOT NULL,
  `e_id` int(11) UNSIGNED NOT NULL,
  `p_id` int(11) UNSIGNED NOT NULL,
  `c_id` int(11) UNSIGNED NOT NULL,
  `hr_progres` varchar(191) NOT NULL,
  `hr_price` int(11) NOT NULL,
  `status` enum('waiting','aprove','reject','') NOT NULL,
  `date_confirm` date NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `hire`
--

INSERT INTO `hire` (`hr_id`, `e_id`, `p_id`, `c_id`, `hr_progres`, `hr_price`, `status`, `date_confirm`, `created_at`) VALUES
(8, 64, 21, 20, 'on progres', 5000000, '', '2021-01-18', '2021-01-18 03:21:56');

-- --------------------------------------------------------

--
-- Struktur dari tabel `project`
--

CREATE TABLE `project` (
  `id_project` int(11) NOT NULL,
  `name_project` varchar(100) NOT NULL,
  `status` varchar(50) NOT NULL,
  `descs` text NOT NULL,
  `id_company` int(11) NOT NULL,
  `id_engineer` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `project`
--

INSERT INTO `project` (`id_project`, `name_project`, `status`, `descs`, `id_company`, `id_engineer`) VALUES
(21, 'apliasi company', 'remote', 'Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak', 20, 0),
(24, 'aplikasi android company', 'onsite', 'Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak', 20, 0),
(25, 'aplikasi android company', 'onsite', 'Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak', 20, 0),
(26, 'aplikasi android company', 'onsite', 'Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak', 20, 0),
(27, 'aplikasi android company', 'onsite', 'Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak', 20, 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `showcase`
--

CREATE TABLE `showcase` (
  `id_showcase` int(11) NOT NULL,
  `showcase` varchar(255) NOT NULL,
  `id_engineer` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `skill`
--

CREATE TABLE `skill` (
  `id_skill` int(11) NOT NULL,
  `id_engineer` int(11) NOT NULL,
  `skill_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `skill`
--

INSERT INTO `skill` (`id_skill`, `id_engineer`, `skill_name`) VALUES
(12, 0, 'kotlin'),
(13, 64, 'kotlin');

-- --------------------------------------------------------

--
-- Struktur dari tabel `skills`
--

CREATE TABLE `skills` (
  `id_skills` int(11) NOT NULL,
  `id_engineer` int(11) NOT NULL,
  `id_skill` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id_user`, `email`, `password`, `role`) VALUES
(69, 'engineer@gmail.com', '$2a$10$0yBxfbd1fbO1qJVbvlhP5OBfpex86snKxC.EvsRs7zCtCfHC4YsJW', 1),
(71, 'company@gmail.com', '$2a$10$7q1jK21RrsEP7YD/7lg6yOVas8rg4HI8HKMeUj51K6lzjMJOuuG8W', 2);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id_company`);

--
-- Indeks untuk tabel `engineer`
--
ALTER TABLE `engineer`
  ADD PRIMARY KEY (`id_engineer`);

--
-- Indeks untuk tabel `hire`
--
ALTER TABLE `hire`
  ADD PRIMARY KEY (`hr_id`),
  ADD KEY `e_id` (`e_id`),
  ADD KEY `p_id` (`p_id`),
  ADD KEY `c_id` (`c_id`);

--
-- Indeks untuk tabel `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id_project`);

--
-- Indeks untuk tabel `showcase`
--
ALTER TABLE `showcase`
  ADD PRIMARY KEY (`id_showcase`);

--
-- Indeks untuk tabel `skill`
--
ALTER TABLE `skill`
  ADD PRIMARY KEY (`id_skill`);

--
-- Indeks untuk tabel `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id_skills`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `company`
--
ALTER TABLE `company`
  MODIFY `id_company` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT untuk tabel `engineer`
--
ALTER TABLE `engineer`
  MODIFY `id_engineer` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT untuk tabel `hire`
--
ALTER TABLE `hire`
  MODIFY `hr_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `project`
--
ALTER TABLE `project`
  MODIFY `id_project` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT untuk tabel `showcase`
--
ALTER TABLE `showcase`
  MODIFY `id_showcase` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `skill`
--
ALTER TABLE `skill`
  MODIFY `id_skill` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT untuk tabel `skills`
--
ALTER TABLE `skills`
  MODIFY `id_skills` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

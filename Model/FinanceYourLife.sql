-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 18-02-2025 a las 05:24:34
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `FinanceYourLife`
--
CREATE DATABASE IF NOT EXISTS `FinanceYourLife` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `FinanceYourLife`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Ahorros`
--

CREATE TABLE `Ahorros` (
  `id_ahorro` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `cantidad` decimal(10,2) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Categorias`
--

CREATE TABLE `Categorias` (
  `id_categoria` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Cliente`
--

CREATE TABLE `Cliente` (
  `id_cliente` int(11) NOT NULL,
  `nombre_completo` varchar(100) NOT NULL,
  `tipo_documento` enum('CC','TI','CE','Otro') NOT NULL,
  `numero_documento` varchar(20) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Gastos`
--

CREATE TABLE `Gastos` (
  `id_gasto` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `cantidad` decimal(10,2) NOT NULL,
  `id_categoria_gastos` int(11) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Ingresos`
--

CREATE TABLE `Ingresos` (
  `id_ingreso` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `cantidad` decimal(10,2) NOT NULL,
  `id_categoria_ingresos` int(11) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Presupuestos`
--

CREATE TABLE `Presupuestos` (
  `id_presupuesto` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_categoria_presupuesto` int(11) NOT NULL,
  `monto_maximo` decimal(10,2) NOT NULL,
  `mes` int(11) NOT NULL,
  `año` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Usuario`
--

CREATE TABLE `Usuario` (
  `id_usuario` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contraseña` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Ahorros`
--
ALTER TABLE `Ahorros`
  ADD PRIMARY KEY (`id_ahorro`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `Categorias`
--
ALTER TABLE `Categorias`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `Cliente`
--
ALTER TABLE `Cliente`
  ADD PRIMARY KEY (`id_cliente`),
  ADD UNIQUE KEY `numero_documento` (`numero_documento`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `Gastos`
--
ALTER TABLE `Gastos`
  ADD PRIMARY KEY (`id_gasto`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_categoria_gastos` (`id_categoria_gastos`);

--
-- Indices de la tabla `Ingresos`
--
ALTER TABLE `Ingresos`
  ADD PRIMARY KEY (`id_ingreso`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_categoria_ingresos` (`id_categoria_ingresos`);

--
-- Indices de la tabla `Presupuestos`
--
ALTER TABLE `Presupuestos`
  ADD PRIMARY KEY (`id_presupuesto`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_categoria_presupuesto` (`id_categoria_presupuesto`);

--
-- Indices de la tabla `Usuario`
--
ALTER TABLE `Usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `id_cliente` (`id_cliente`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Ahorros`
--
ALTER TABLE `Ahorros`
  MODIFY `id_ahorro` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Categorias`
--
ALTER TABLE `Categorias`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Cliente`
--
ALTER TABLE `Cliente`
  MODIFY `id_cliente` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Gastos`
--
ALTER TABLE `Gastos`
  MODIFY `id_gasto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Ingresos`
--
ALTER TABLE `Ingresos`
  MODIFY `id_ingreso` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Presupuestos`
--
ALTER TABLE `Presupuestos`
  MODIFY `id_presupuesto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Usuario`
--
ALTER TABLE `Usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Ahorros`
--
ALTER TABLE `Ahorros`
  ADD CONSTRAINT `ahorros_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `Usuario` (`id_usuario`) ON DELETE CASCADE;

--
-- Filtros para la tabla `Gastos`
--
ALTER TABLE `Gastos`
  ADD CONSTRAINT `gastos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `Usuario` (`id_usuario`) ON DELETE CASCADE,
  ADD CONSTRAINT `gastos_ibfk_2` FOREIGN KEY (`id_categoria_gastos`) REFERENCES `Categorias` (`id_categoria`) ON DELETE CASCADE;

--
-- Filtros para la tabla `Ingresos`
--
ALTER TABLE `Ingresos`
  ADD CONSTRAINT `ingresos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `Usuario` (`id_usuario`) ON DELETE CASCADE,
  ADD CONSTRAINT `ingresos_ibfk_2` FOREIGN KEY (`id_categoria_ingresos`) REFERENCES `Categorias` (`id_categoria`) ON DELETE CASCADE;

--
-- Filtros para la tabla `Presupuestos`
--
ALTER TABLE `Presupuestos`
  ADD CONSTRAINT `presupuestos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `Usuario` (`id_usuario`) ON DELETE CASCADE,
  ADD CONSTRAINT `presupuestos_ibfk_2` FOREIGN KEY (`id_categoria_presupuesto`) REFERENCES `Categorias` (`id_categoria`) ON DELETE CASCADE;

--
-- Filtros para la tabla `Usuario`
--
ALTER TABLE `Usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `Cliente` (`id_cliente`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

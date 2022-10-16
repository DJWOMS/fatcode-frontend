import React from "react";
import FooterLinks from "./FooterLinks";
import { Grid, Typography, Box, Link } from "@mui/material";
import { LogotypeFooter } from "./componentsIconFooter/LogotypeFooter";


const Footer = () => {

  // импровизированный данные, информация о курсе (общая)
  const footerText = [
    { id: 1, text: "Навигация", href: [{ title: "Главная", link: "/" }, { title: "Курсы", link: "/" }, { title: "База знаний", link: "/" }, { title: "Вопрос-ответ", link: "/" }, { title: "Поиск", link: "/" }] },
    { id: 2, text: "Интересное", href: [{ title: "О нас", link: "/" }, { title: "Блог", link: "/" }, { title: "Глоссарий", link: "/" }, { title: "Сообщество", link: "/" }, { title: "Мой профиль", link: "/" }, { title: "Секретная страница", link: "/" }] },
    { id: 3, text: "Контакты", href: [{ title: "Улица, Город, Индекс, Страна", link: "/" }, { title: "+0 (000) 000 00 00", link: "/" }, { title: "a.alambik@gmail.com", link: "/" },] },
  ];

  return (
    <Grid container rowGap={4} columnGap={6}
      sx={{
        marginTop: 10,
        bgcolor: '#1C1D1E',
        py: 8,
        px: 4,
      }}>
        {/* вывод логотипа  и информации */}
      <Grid item xs={12} sm={5} md={3}>
        <LogotypeFooter />
        <Box
          sx={{
            py: 2,
            color: '#ADADAD',
          }}>
          <Typography sx={{ fontSize: '12px', fontWeight: 400, }}>
            © 2022 “FatCode”
          </Typography>
          <Typography sx={{ fontSize: '12px', fontWeight: 400, }}>
            Все права защищенны
          </Typography>
        </Box>
        <Link
          component="button"
          variant="body2"
          sx={{
            color: '#FFFFFF',
            textDecorationColor: '#FFFFFF',
          }}
        >
          Политика конфиденциальности
        </Link>
      </Grid>

      {/* вывод ссылок */}
      <Grid item xs={12} sm={6} md={8}>
        <FooterLinks footerText={footerText}/>
      </Grid>
    </Grid>
  );
};

export default Footer;




{/* <footer className="mx-auto footer">
    <div className="footer_container">
     <Logotype /> 
      <FooterLinks FooterText={FooterText}/>
    </div>
  </footer> */}
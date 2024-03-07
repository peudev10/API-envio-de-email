
const validateEmail = (req, res, next) => {
    const { to, subject, html, text } = req.body;
  
    if (!to || to.trim() === '') {
      return res.status(402).json({ msg: "A chave 'to' precisa ser enviada no corpo da requisição." });
    } else if (!subject || subject.trim() === '') {
      return res.status(402).json({ msg: "A chave 'subject' precisa ser enviada no corpo da requisição." });
    } else if (!html || html.trim() === '') {
      return res.status(402).json({ msg: "A chave 'html' precisa ser enviada no corpo da requisição." });
    } else if (!text || text.trim() === '') {
      return res.status(402).json({ msg: "A chave 'text' precisa ser enviada no corpo da requisição." });
    }
  
    next();
}

const validateToEmail = (req, res, next) => {
    const { to } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(to)) {
        return res.status(402).json({ msg: "O valor da chave 'to' não é um endereço de e-mail válido." });
    }

    next()
}
  
module.exports = {
    validateEmail,
    validateToEmail
};


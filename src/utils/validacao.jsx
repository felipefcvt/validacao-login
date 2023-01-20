export function validacao({ email, password }) {
  return new Promise((success, erro) => {
    setTimeout(function () {
      if (password === "root000" && !!email) {
        success();
      } else {
        erro({ mensagem: "Email ou senha inválidos!" });
      }
    });
  });
}

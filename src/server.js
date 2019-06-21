class Server {
  autorization = async (data) => {
    const { login, password } = await JSON.parse(localStorage.getItem('autorization'));
    if (login !== data.login) return {status: false, message: 'Не правильный лигон'};
    if (parseInt(password) !== parseInt(data.password)) return {status: false, message: 'Не правильный пароль'};
    return {status: true};
  }
}

export default Server;

import { useI18n } from 'next-localization';

const LoginForm = (): JSX.Element => {
  const { t } = useI18n();
  return (
    <div className="container">
      <div className="row justify-content-center">
        <br />
        <h2>{t('VacanciesText')}</h2>
        <br />
        <div className="col-md-4 col-6">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="satya@microsoft.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="****"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              <a href="/employers/microsoft" style={{ color: 'white' }}>
                Login
              </a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

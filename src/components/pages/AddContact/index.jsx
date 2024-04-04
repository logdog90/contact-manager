import { Link } from "react-router-dom"
import './styles.css'

const AddContact = () => {
  return (
    <>
      <section className="add-contact">
        <div className="container">
          <h3 className="mb-4">Добавить контакт</h3>
          <div className="row mb-4">
            <div className="col-md-8">
              <form>
                <div className="mb-2">
                  <input 
                    type="text" 
                    className="form-control"
                    placeholder="Ссылка на фото"
                  />
                </div>
                <div className="mb-2">
                  <input 
                    type="text" 
                    className="form-control"
                    placeholder="ФИО"
                    required
                  />
                </div>
                <div className="mb-2">
                  <select className="form-control">
                    <option value="">Выберите должность</option>
                    <option value="">Сантехник</option>
                    <option value="">Электрик</option>
                    <option value="">Менеджер</option>
                    <option value="">Системный администратор</option>
                  </select>
                </div>
                <div className="mb-2">
                  <input 
                    type="text" 
                    className="form-control"
                    placeholder="Телефон"
                    required
                  />
                </div>
                <div className="mb-2">
                  <input 
                    type="text" 
                    className="form-control"
                    placeholder="E-Mail"
                    required
                  />
                </div>
                <div className="d-flex gap-2">
                  <input 
                    type="submit" 
                    className="btn btn-success"
                    value="Добавить"
                  />
                  <Link 
                    to="/contact"
                    className="btn btn-danger"
                  >
                    Закрыть
                  </Link>
                </div>
              </form>
            </div>
            <div className="col-md-4">
              <img 
                src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" 
                alt="Фото" 
                className="add-contact-photo" 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AddContact
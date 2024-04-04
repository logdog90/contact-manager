import { Link } from "react-router-dom"
import './styles.css'

const EditContact = () => {
  return (
    <>
      <section className="edit-contact">
        <div className="container">
          <h3 className="mb-4">Обновить контакт</h3>
          <div className="row mb-4">
            <div className="col-md-4">
              <img 
                src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" 
                alt="Фото" 
                className="edit-contact-photo" 
              />
            </div>
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
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Должность"
                    required
                  />
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
                    className="btn btn-primary"
                    value="Обновить"
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
          </div>
        </div>
      </section>
    </>
  )
}

export default EditContact
import {Link} from 'react-router-dom'
import { FaEye, FaPen, FaTrash } from "react-icons/fa"
import './styles.css'

const ContactList = () => {
  return (
    <>
    <section className="contact-head">
      <div className="container">
        <h3 className="mb-4">Список контактов</h3>
        <div className="row mb-4">
          <div className="col-md-4">
            <form className="d-flex gap-2">
              <input type="text" placeholder="Поиск сотрудника" className="form-control" />
              <button className="btn btn-dark">Найти</button>
            </form>
          </div>
          <div className="col-md-8 text-end">
            <Link to="/contact/add" className="btn btn-success">Создать</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="contact-list">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="row flex-column pt-3 pb-4">
                  <div className="col mb-3">
                    <img 
                      src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" 
                      alt="Фото" 
                      className="photo"
                    />
                  </div>
                  <div className="col mb-3">
                    <ul className="list-group">
                      <li className="d-flex justify-content-between align-items-center list-group-item list-group-item-action text">
                        <span><b>ФИО:</b></span>
                        <span>Иванов Иван Иванович</span>
                      </li>
                      <li className="d-flex justify-content-between align-items-center list-group-item list-group-item-action text">
                        <span><b>Должность:</b></span>
                        <span>Сантехник</span>
                      </li>
                      <li className="d-flex justify-content-between align-items-center list-group-item list-group-item-action text">
                        <span><b>Телефон:</b></span>
                        <span>+7 (984) 123-32-12</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col d-flex justify-content-center gap-1">
                    <Link 
                      to="/contact/view/:id"
                      className="btn btn-warning"
                    >
                      <FaEye />
                    </Link>
                    <Link 
                      to="/contact/edit/:id"
                      className="btn btn-primary"
                    >
                      <FaPen />
                    </Link>
                    <button className="btn btn-danger">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="row flex-column pt-3 pb-4">
                  <div className="col mb-3">
                    <img 
                      src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" 
                      alt="Фото" 
                      className="photo"
                    />
                  </div>
                  <div className="col mb-3">
                    <ul className="list-group">
                      <li className="d-flex justify-content-between align-items-center list-group-item list-group-item-action text">
                        <span><b>ФИО:</b></span>
                        <span>Иванов Иван Иванович</span>
                      </li>
                      <li className="d-flex justify-content-between align-items-center list-group-item list-group-item-action text">
                        <span><b>Должность:</b></span>
                        <span>Сантехник</span>
                      </li>
                      <li className="d-flex justify-content-between align-items-center list-group-item list-group-item-action text">
                        <span><b>Телефон:</b></span>
                        <span>+7 (984) 123-32-12</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col d-flex justify-content-center gap-1">
                    <Link 
                      to="/contact/view/:id"
                      className="btn btn-warning"
                    >
                      <FaEye />
                    </Link>
                    <Link 
                      to="/contact/edit/:id"
                      className="btn btn-primary"
                    >
                      <FaPen />
                    </Link>
                    <button className="btn btn-danger">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="row flex-column pt-3 pb-4">
                  <div className="col mb-3">
                    <img 
                      src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" 
                      alt="Фото" 
                      className="photo"
                    />
                  </div>
                  <div className="col mb-3">
                    <ul className="list-group">
                      <li className="d-flex justify-content-between align-items-center list-group-item list-group-item-action text">
                        <span><b>ФИО:</b></span>
                        <span>Иванов Иван Иванович</span>
                      </li>
                      <li className="d-flex justify-content-between align-items-center list-group-item list-group-item-action text">
                        <span><b>Должность:</b></span>
                        <span>Сантехник</span>
                      </li>
                      <li className="d-flex justify-content-between align-items-center list-group-item list-group-item-action text">
                        <span><b>Телефон:</b></span>
                        <span>+7 (984) 123-32-12</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col d-flex justify-content-center gap-1">
                    <Link 
                      to="/contact/view/:id"
                      className="btn btn-warning"
                    >
                      <FaEye />
                    </Link>
                    <Link 
                      to="/contact/edit/:id"
                      className="btn btn-primary"
                    >
                      <FaPen />
                    </Link>
                    <button className="btn btn-danger">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="row flex-column pt-3 pb-4">
                  <div className="col mb-3">
                    <img 
                      src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" 
                      alt="Фото" 
                      className="photo"
                    />
                  </div>
                  <div className="col mb-3">
                    <ul className="list-group">
                      <li className="d-flex justify-content-between align-items-center list-group-item list-group-item-action text">
                        <span><b>ФИО:</b></span>
                        <span>Иванов Иван Иванович</span>
                      </li>
                      <li className="d-flex justify-content-between align-items-center list-group-item list-group-item-action text">
                        <span><b>Должность:</b></span>
                        <span>Сантехник</span>
                      </li>
                      <li className="d-flex justify-content-between align-items-center list-group-item list-group-item-action text">
                        <span><b>Телефон:</b></span>
                        <span>+7 (984) 123-32-12</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col d-flex justify-content-center gap-1">
                    <Link 
                      to="/contact/view/:id"
                      className="btn btn-warning"
                    >
                      <FaEye />
                    </Link>
                    <Link 
                      to="/contact/edit/:id"
                      className="btn btn-primary"
                    >
                      <FaPen />
                    </Link>
                    <button className="btn btn-danger">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="row flex-column pt-3 pb-4">
                  <div className="col mb-3">
                    <img 
                      src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" 
                      alt="Фото" 
                      className="photo"
                    />
                  </div>
                  <div className="col mb-3">
                    <ul className="list-group">
                      <li className="d-flex justify-content-between align-items-center list-group-item list-group-item-action text">
                        <span><b>ФИО:</b></span>
                        <span>Иванов Иван Иванович</span>
                      </li>
                      <li className="d-flex justify-content-between align-items-center list-group-item list-group-item-action text">
                        <span><b>Должность:</b></span>
                        <span>Сантехник</span>
                      </li>
                      <li className="d-flex justify-content-between align-items-center list-group-item list-group-item-action text">
                        <span><b>Телефон:</b></span>
                        <span>+7 (984) 123-32-12</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col d-flex justify-content-center gap-1">
                    <Link 
                      to="/contact/view/:id"
                      className="btn btn-warning"
                    >
                      <FaEye />
                    </Link>
                    <Link 
                      to="/contact/edit/:id"
                      className="btn btn-primary"
                    >
                      <FaPen />
                    </Link>
                    <button className="btn btn-danger">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="row flex-column pt-3 pb-4">
                  <div className="col mb-3">
                    <img 
                      src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" 
                      alt="Фото" 
                      className="photo"
                    />
                  </div>
                  <div className="col mb-3">
                    <ul className="list-group">
                      <li className="d-flex justify-content-between align-items-center list-group-item list-group-item-action text">
                        <span><b>ФИО:</b></span>
                        <span>Иванов Иван Иванович</span>
                      </li>
                      <li className="d-flex justify-content-between align-items-center list-group-item list-group-item-action text">
                        <span><b>Должность:</b></span>
                        <span>Сантехник</span>
                      </li>
                      <li className="d-flex justify-content-between align-items-center list-group-item list-group-item-action text">
                        <span><b>Телефон:</b></span>
                        <span>+7 (984) 123-32-12</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col d-flex justify-content-center gap-1">
                    <Link 
                      to="/contact/view/:id"
                      className="btn btn-warning"
                    >
                      <FaEye />
                    </Link>
                    <Link 
                      to="/contact/edit/:id"
                      className="btn btn-primary"
                    >
                      <FaPen />
                    </Link>
                    <button className="btn btn-danger">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ContactList

import { Link } from "react-router-dom"
import './styles.css'

const ViewContact = () => {
  return (
    <>
      <section className="view-contact">
        <div className="container">
          <h3 className="mb-4">Контакт</h3>
          <div className="row mb-4">
            <div className="col-md-4">
              <img 
                src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" 
                alt="Фото"
                className="view-contact-photo"
              />
            </div>
            <div className="col-md-8">
              <ul className="list-group mb-3">
                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                  <span><b>ФИО:</b></span>
                  <span>Иванов Иван Иванович</span>
                </li>
                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                  <span><b>Должность:</b></span>
                  <span>Сантехник</span>
                </li>
                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                  <span><b>Телефон:</b></span>
                  <span>+7 (984) 123-32-12</span>
                </li>
              </ul>
              <div className="row">
                <div className="col text-start">
                  <Link 
                    to="/contact"
                    className="btn btn-warning"
                  >
                    Назад
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ViewContact
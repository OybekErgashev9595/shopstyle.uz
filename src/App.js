import logo from './logo.svg';
import './App.css';
import rasm1 from './rasm1.jpg';
import star from './star.png'
import kazrina from './kazrina.png'

function App() {
  return (
    <div>
      <nav class="container navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Start Bootstrap</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Shop
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">All Products</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="#">Popullar Items</a></li>
                    <li><a class="dropdown-item" href="#">New Arrivals</a></li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex">
                <button class="btn btn-outline-dark"  type="button"><img className='karzina' src={kazrina} alt="" /> Cart</button>
              </form>
            </div>
          </div>
      </nav>
      <section className='shop'>
        <h1>Shop in style</h1>
        <p>With this shop hompeage template</p>
      </section>
      <section className='cards container'>
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col ">
            <div class="card h-100">
              <img src={rasm1} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Fancy Product</h5>
                <p class="card-text">$40.00 - $80.00</p>
                <br />
                <button type="button" class="btn btn-outline-dark">View options</button>
              </div>
            </div>
          </div>
          <div class="col ">
            <div class="card h-100">
              <img src={rasm1} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Fancy Product</h5>
                <div className='stars'>
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <p class="card-text"><del>$20.00</del> $80.00</p>              
                <button type="button" class="btn btn-outline-dark">View options</button>
              </div>
            </div>
          </div>
          
          <div class="col ">
            <div class="card h-100">
              <img src={rasm1} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Fancy Product</h5>
                <p class="card-text">$40.00 - $80.00</p>
                <br />
                <button type="button" class="btn btn-outline-dark">View options</button>
              </div>
            </div>
          </div>
          <div class="col ">
            <div class="card h-100">
              <img src={rasm1} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Fancy Product</h5>
                <div className='stars'>
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <p class="card-text"><del>$20.00</del> $80.00</p>              
                <button type="button" class="btn btn-outline-dark">View options</button>
              </div>
            </div>
          </div>
          <div class="col ">
            <div class="card h-100">
              <img src={rasm1} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Fancy Product</h5>
                <p class="card-text">$40.00 - $80.00</p>
                <br />
                <button type="button" class="btn btn-outline-dark">View options</button>
              </div>
            </div>
          </div>
          <div class="col ">
            <div class="card h-100">
              <img src={rasm1} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Fancy Product</h5>
                <p class="card-text">$40.00 - $80.00</p>
                <br />
                <button type="button" class="btn btn-outline-dark">View options</button>
              </div>
            </div>
          </div>
          <div class="col ">
            <div class="card h-100">
              <img src={rasm1} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Fancy Product</h5>
                <div className='stars'>
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <p class="card-text"><del>$20.00</del> $80.00</p>              
                <button type="button" class="btn btn-outline-dark">View options</button>
              </div>
            </div>
          </div>
          <div class="col ">
            <div class="card h-100">
              <img src={rasm1} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Fancy Product</h5>
                <div className='stars'>
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <p class="card-text"><del>$20.00</del> $80.00</p>              
                <button type="button" class="btn btn-outline-dark">View options</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p>Copyright © Your Website 2022</p>
      </footer>
    </div>
  );
}

export default App;

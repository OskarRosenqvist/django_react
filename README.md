<img src="https://github.com/OskarRosenqvist/django_react/blob/main/frontend/src/static/images/plocket.png" alt=""></img>

## Start backend

In the project backend directory, you can run:

<ul>
  <li>docker compose build</li>
  <li>docker compose run --rm backend python manage.py migrate</li>
  <li>docker compose run --rm backend python manage.py loaddata</li>
  <li>docker compose run --rm backend python manage.py createsuperuser</li>
  <li>docker compose up</li>
</ul>



## Start frontend

In the project frontend directory, you can run:

<ul>
  <li>npm install</li>
  <li>npm start</li>
</ul>

Go to http://localhost:3000/ to test add frontend
Go to http://localhost:8000/api/v1/adds/ to test backend api


# Django

  502  mkdir django
  503  cd django
  504  mkdir criar_projeto_basico
  505  cd criar_projeto_basico
  506  python3 -m venv myenv
  507  git status .
  508  ls
  509  cd ../../..
  510  cd python
  511  vi .gitignore
  512  cd django/
  513  ls
  514  cd criar_projeto_basico/
  515  git status .
  516  source myenv/bin/activate
  517  ls
  518  pip install django
  519  django-admin --version
  520  django-admin startproject learning_log
  521  ls
  522  rm -rf learning_log/
  523  django-admin startproject learning_log .
  524  ls
  525  cat manage.py
  526  ls
  527  cat learning_log/
  528  ls
  529  ls learning_log/
  530  python manage.py migrate
  531  python manage.py run srver
  532  python manage.py help
  533  python manage.py run server
  534  python manage.py runserver
  535  history
  536  ls
  537  cd ../../
  538  vi .gitignore
  539  cd -
  540  ls
  541  git status .
  542  git add .
  543  git status .
  544  git commit -m "Estudo django olá mundo"
  545  git push
  546  history

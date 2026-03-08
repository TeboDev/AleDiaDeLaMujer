from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    # Usando el puerto 5000 por defecto para Flask de forma local
    app.run(debug=True, port=5000)

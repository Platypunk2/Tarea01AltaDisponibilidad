import pymysql
from app import app
from db import mysql
from flask import jsonify, request


@app.route('/productos',methods=['GET'])
def productos():
    conn = mysql.connect()

    cursor = conn.cursor(pymysql.cursors.DictCursor)
    cursor.execute("SELECT * FROM productos")

    rows = cursor.fetchall()

    resp = jsonify(rows)
    resp.status_code = 200

    return resp

@app.route('/productos/<idprod>',methods=['GET'])
def productosEsp(idprod):
    conn = mysql.connect()

    cursor = conn.cursor(pymysql.cursors.DictCursor)
    cursor.execute("SELECT * FROM productos WHERE idprod = "+str(idprod))

    rows = cursor.fetchall()

    resp = jsonify(rows)
    resp.status_code = 200

    return resp


if __name__ == "__main__":
    app.run(debug=True,host='0.0.0.0')
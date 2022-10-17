from crypt import methods
import pymysql
from app import app
from db import mysql
from prod import *
from flask import jsonify, request

@app.route('/reseneas/<idprod>',methods=['GET'])
def reseneas(idprod):
    try:
        conn = mysql.connect()

        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute("SELECT * FROM reseneas WHERE idprod = "+str(idprod))
        rows = cursor.fetchall()

        resp = jsonify(rows)
        resp.status_code = 200  
        return resp
    except Exception as ex:
        return jsonify({'mensaje':"Error"})


@app.route('/addreseneas',methods=['POST'])
def addresenea():
    
    json = request.json
    
    idProd = json['idProd']
    correo = json['correo']
    user = json['user']
    texto = json['texto']
    calificacion = json['calificacion']
    conn = mysql.connect()

    cursor = conn.cursor(pymysql.cursors.DictCursor)
    sqlQuery = "INSERT INTO reseneas (idProd, correo, user, texto, calificacion) VALUES(%s, %s, %s, %s, %s)"
    bindData = (idProd, correo, user, texto, calificacion)
    cursor.execute(sqlQuery, bindData)
    
    conn.commit()
    return jsonify({'mensaje': "resenea registrada"})
    

@app.route('/updatereseneas',methods=['PUT'])
def updateresenea():
    try:
        json = request.json
        idProd = json['idProd']
        correo = json['correo']
        texto = json['texto']
        calificacion = json['calificacion']
        conn = mysql.connect()

        cursor = conn.cursor(pymysql.cursors.DictCursor)
        sqlQuery = "UPDATE reseneas SET texto = %s, calificacion = %s WHERE idProd = %s AND correo = %s"
        bindData = (texto, calificacion, idProd, correo)
        affected_rows = cursor.execute(sqlQuery, bindData)
        if affected_rows:
            conn.commit()
            return jsonify({'mensaje': "resenea actualizada"})
        else:
            return jsonify({'mensaje': "resenea no encontrada"})
        
    except Exception as ex:
        return jsonify({'mensaje':"Error"})


@app.route('/deletereseneas',methods=['DELETE'])
def Deleteresenea():
    try:
        json = request.json
        idProd = json['idProd']
        correo = json['correo']
        conn = mysql.connect()

        cursor = conn.cursor(pymysql.cursors.DictCursor)
        sqlQuery = "DELETE FROM reseneas WHERE idProd = %s AND correo = %s"
        bindData = (idProd, correo)
        affected_rows = cursor.execute(sqlQuery, bindData)
        if affected_rows:
            conn.commit()
            return jsonify({'mensaje': "resenea borrada"})
        else:
            return jsonify({'mensaje': "resenea no encontrada"})
        
    except Exception as ex:
        return jsonify({'mensaje':"Error"})


if __name__ == "__main__":
    app.run(debug=True,host='0.0.0.0')

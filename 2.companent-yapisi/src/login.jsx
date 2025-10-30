import React from 'react'

export const users= [
    {
        username:"ahmet",
        password:"123"
    },
    {
        username:"mehmet",
        password:"456"
    }
]


function Login() {
  return (
    <>
      <div>
        <p>Kullanıcı Adı</p>
        <input type="text"/>
      </div>
      <div>
        <p>Şifre</p>
        <input type="text" />
      </div>
      <button>Giriş Yap</button>
    </>
    
  )
}

export default Login
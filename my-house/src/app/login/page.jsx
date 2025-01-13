"use client"

import * as React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Checkbox } from "../../components/ui/checkbox"
import { cn } from "../../lib/utils"
import { Separator } from "../../components/ui/separator"
import { motion } from "framer-motion"
import Link from "next/link"
import Duna from "../../app/images/duna.jpg"



export default function AuthForm() {
  // Estado para controlar qual formulário será exibido
  // isLogin = true -> mostra formulário de login
  // isLogin = false -> mostra formulário de cadastro
  const [isLogin, setIsLogin] = React.useState(false)

  // Formulário de Cadastro
  const {
    register: registerRegisterForm,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: registerErrors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      terms: false,
    },
  })

  // Formulário de Login
  const {
    register: registerLoginForm,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  })


  // Função para alternar entre Login e Cadastro
  function handleSwitchForm() {
    setIsLogin(!isLogin)
  }

  const onSubmitLogin = () => {
    console.log("fez o login")
  }
  

  const onSubmitRegister = () => {
    console.log("fez o cadastro")
  }

  return (
    <motion.div  className="flex items-center justify-center motion-preset-blur-right  motion-duration-1500">
      <div className="flex items-center justify-between bg-[#000000] rounded-2xl min-w-[64.103vw] min-h-[80.882vh] max-w-[60vw]">
        {/* Imagem e animação do lado esquerdo/direito */}
        <motion.div
          animate={{ x: isLogin ? "96%" : 0, zIndex: 10 }}
          transition={{ duration: 0.4, ease: "linear" }}
          className="p-5 w-full h-full"
        >
          <img src={"https://images.pexels.com/photos/26976587/pexels-photo-26976587/free-photo-of-monocromatico-de-pessoas-em-um-deserto.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="background Image Duna" className="rounded-2xl shadow-[1px_3px_82px_-22px_rgba(237,202,175,1)] w-[95%] h-[95%]" />
        </motion.div>

        {/* Container do formulário, animando para a esquerda quando for login */}
        <motion.div
          animate={{ x: isLogin ? "-100%" : 0 }}
          transition={{ duration: 0.4, ease: "linear" }}
          className="flex flex-col items-center justify-around text-white h-full w-full"
        >
          <div
            className={cn(
              "mx-auto flex w-full max-w-sm flex-col gap-4 rounded-md p-6 text-white"
            )}
          >
            {/* Se isLogin for true, exibimos o formulário de Login; caso contrário, o de Cadastro */}
            {isLogin ? (
              <>
                <div>
                  <h1 className="text-5xl">Bem-vindo(a) de volta!</h1>
                </div>
                <p className="text-[#a3a3a3] mb-3">
                  Ou, se ainda não possui uma conta, faça o{" "}
                  <Link
                    onClick={handleSwitchForm}
                    className="hover:underline text-gray-300 font-semibold"
                    href="#"
                  >
                    Cadastro
                  </Link>
                </p>

                {/* Formulário de Login */}
                <form
                  onSubmit={handleLoginSubmit(onSubmitLogin)}
                  className="flex flex-col gap-4"
                >
                  {/* Email */}
                  <div className="flex flex-col">
                    <Input
                      id="loginEmail"
                      type="email"
                      placeholder="Email"
                      className="w-full bg-[#333333] focus:border-blue-300 border-none"
                      {...registerLoginForm("email", { required: true })}
                    />
                    {loginErrors.email && (
                      <p className="text-sm text-red-500">
                        Email é obrigatório para login.
                      </p>
                    )}
                  </div>

                  {/* Senha */}
                  <div className="flex flex-col">
                    <Input
                      id="loginPassword"
                      type="password"
                      placeholder="Senha"
                      className="w-full bg-[#333333] focus:border-blue-300 border-none"
                      {...registerLoginForm("password", { required: true })}
                    />
                    {loginErrors.password && (
                      <p className="text-sm text-red-500">
                        Senha é obrigatória para login.
                      </p>
                    )}
                  </div>

                  {/* Botão de Login */}
                  <Button type="submit" className="mt-4 w-full bg-[#22c55e]">
                    Entrar
                  </Button>
                </form>

                {/* Ou entre com... */}
                <Separator className="my-4" />
                <div className="flex items-center justify-center gap-2">
                  <Button variant="outline" className="w-full bg-[#000000]">
                    Google
                  </Button>
                  <Button variant="outline" className="w-full bg-[#000000]">
                    Apple
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h1 className="text-5xl">Crie sua Conta</h1>
                </div>
                <p className="text-[#a3a3a3] mb-3">
                  Ou, se já possui uma conta, faça o{" "}
                  <Link
                    onClick={handleSwitchForm}
                    className="hover:underline text-gray-300 font-semibold"
                    href="#"
                  >
                    Login
                  </Link>
                </p>

                {/* Formulário de Cadastro */}
                <form
                  onSubmit={handleRegisterSubmit(onSubmitRegister)}
                  className="flex flex-col gap-4"
                >
                  {/* Primeiro nome e Sobrenome */}
                  <div className="flex justify-start space-x-2">
                    <div className="flex flex-col w-1/2">
                      <Input
                        id="firstName"
                        placeholder="Nome"
                        className="w-full bg-[#333333] focus:border-blue-300 border-none"
                        {...registerRegisterForm("firstName", { required: true })}
                      />
                      {registerErrors.firstName && (
                        <p className="text-sm text-red-500">
                          Nome é obrigatório.
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col w-1/2">
                      <Input
                        id="lastName"
                        placeholder="Sobrenome"
                        className="w-full bg-[#333333] focus:border-blue-300 border-none"
                        {...registerRegisterForm("lastName", { required: true })}
                      />
                      {registerErrors.lastName && (
                        <p className="text-sm text-red-500">
                          Sobrenome é obrigatório.
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email"
                      className="w-full bg-[#333333] focus:border-blue-300 border-none"
                      {...registerRegisterForm("email", { required: true })}
                    />
                    {registerErrors.email && (
                      <p className="text-sm text-red-500">
                        Email é obrigatório.
                      </p>
                    )}
                  </div>

                  {/* Senha */}
                  <div className="flex flex-col">
                    <Input
                      id="password"
                      type="password"
                      placeholder="Senha"
                      className="w-full bg-[#333333] focus:border-blue-300 border-none"
                      {...registerRegisterForm("password", { required: true })}
                    />
                    {registerErrors.password && (
                      <p className="text-sm text-red-500">
                        Senha é obrigatória.
                      </p>
                    )}
                  </div>

                  {/* Checkbox de termos */}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      {...registerRegisterForm("terms", { required: true })}
                      className=""
                    />
                    <Label htmlFor="terms" className="text-sm">
                      Eu aceito os Termos e Condições
                    </Label>
                  </div>
                  {registerErrors.terms && (
                    <p className="text-sm text-red-500">
                      Você precisa aceitar os termos.
                    </p>
                  )}

                  {/* Botão de criar conta */}
                  <Button type="submit" className="mt-4 w-full bg-[#22c55e]">
                    Criar Conta
                  </Button>
                </form>

                {/* Ou registre-se com... */}
                <Separator className="my-4" />
                <div className="flex items-center justify-center gap-2">
                  <Button variant="outline" className="w-full bg-[#000000]">
                    Google
                  </Button>
                  <Button variant="outline" className="w-full bg-[#000000]">
                    Apple
                  </Button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

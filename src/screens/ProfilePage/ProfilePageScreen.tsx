import React, { useEffect, useState } from "react";
import { ProfilePage } from "../../pages/ProfilePage/ProfilePage";
import { useAuth } from "../../context/useAuth";
import { useClientData } from "../../hooks/useClienteData";
import { useUpdateClient } from "../../hooks/useUpdateCliente";
import { Cliente } from "../../interface/Cliente";
import Toast from "react-native-toast-message";

export default function ProfilePageScreen() {
  const { logout } = useAuth();
  const { data: cliente, isLoading, error } = useClientData();
  const { mutate: atualizarCliente, isPending } = useUpdateClient();

  const [form, setForm] = useState<
    Pick<Cliente, "nome" | "email" | "telefone" | "pontos">
  >({
    nome: "",
    email: "",
    telefone: "",
    pontos: 0,
  });

  useEffect(() => {
    if (cliente) {
      setForm({
        nome: cliente.nome || "",
        email: cliente.email || "",
        telefone: cliente.telefone || "",
        pontos: cliente.pontos || 0,
      });
    }
  }, [cliente]);

  const handleChange = (campo: keyof typeof form, valor: string | number) => {
    setForm((prev) => ({ ...prev, [campo]: valor }));
  };

  const handleSalvar = () => {
    atualizarCliente(
      {
        nome: form.nome,
        email: form.email,
        telefone: form.telefone,
        pontos: form.pontos,
      },
      {
        onSuccess: () => {
          Toast.show({
            type: "success",
            text1: "Perfil atualizado com sucesso!",
          });
        },
        onError: () => {
          Toast.show({
            type: "error",
            text1: "Erro ao salvar perfil",
          });
        },
      },
    );
  };

  return (
    <ProfilePage
      nome={form.nome}
      email={form.email}
      telefone={form.telefone}
      pontos={form.pontos}
      onChange={handleChange}
      onSalvar={handleSalvar}
      onLogout={logout}
    />
  );
}

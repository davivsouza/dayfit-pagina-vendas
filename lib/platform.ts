// Plataforma de aulas do DayFit: é para lá que a Cakto manda a compradora
// depois do pagamento (página de obrigado) e é onde ela cria a senha e assiste.
export const PLATFORM_URL =
  process.env.NEXT_PUBLIC_PLATFORM_URL ?? "https://www.vip.daymormano.online";

export const PLATFORM_LOGIN_URL = `${PLATFORM_URL}/entrar`;

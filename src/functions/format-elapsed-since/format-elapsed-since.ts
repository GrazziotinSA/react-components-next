function padTime(value: number) {
  return String(value).padStart(2, "0");
}

/**
 * Formata o tempo decorrido desde uma data ISO como `d HH:MM:SS`.
 * @param isoDate - Data de início em ISO
 * @param now - Timestamp atual em ms (padrão `Date.now()`)
 * @returns Tempo decorrido formatado, ou `"0 00:00:00"` se a data for inválida
 * @example
 * formatElapsedSince("2026-08-06T10:00:00.000Z", Date.parse("2026-08-06T11:01:05.000Z"))
 * // "0 01:01:05"
 */
export function formatElapsedSince(isoDate: string, now = Date.now()) {
  const start = Date.parse(isoDate);
  if (Number.isNaN(start)) return "0 00:00:00";

  const totalSeconds = Math.max(0, Math.floor((now - start) / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${days} ${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}`;
}

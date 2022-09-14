// 00000-000
export const maskCEP = (value: string | undefined) => {
  if (!value) return ''
  return value.replace(/\D/g, '').replace(/^(\d{5})(\d{3})+?$/, '$1-$2')
}

// Only accepts that letters are typed
export const maskOnlyLetters = (value: string) => {
  return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, '')
}

// Only accepts that numbers are typed
export const maskOnlyNumbers = (value: string) => {
  return value.replace(/\D/g, '')
}

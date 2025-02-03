export const getSelectedLangCode = (langName: string) => {
  switch (langName.toLowerCase()) {
    case 'english':
      return 'en-US'
    case 'arabic':
      return 'ar-SA'
    case 'hindi':
      return 'hi-IN'
    case 'bangla':
      return 'bn-BD'
    case 'french':
      return 'fr'
    case 'spanish':
      return 'es'
    default:
      return 'en-US' // Default to English if not found
  }
}

class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }
  
  static titleize(string){
    const words = string.split(" ");
    const notAllowed = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']

    for (let i = 0; i < words.length; i++) {
      if (!(notAllowed.includes(words[i]))) {
      words[i] = this.capitalize(words[i])
      }
    }

  words[0] = this.capitalize(words[0])
  return words.join(" ")


  }

}
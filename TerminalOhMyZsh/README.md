# Instalando e configurano o terminal Oh My Zsh

## Instalação
  sh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"

  #### Obs: 
   * No meu caso, ao instalar, ele caiu na seguinte validação "Zsh is not installed. Please install zsh first".
   * Para efetuar a intalação, eu baixei o install.sh manualmente e removi a a validação do arquivo.

## Instalação de tema spaceship pronmpt
   ### link https://github.com/denysdovhan/spaceship-prompt

   * git clone https://github.com/denysdovhan/spaceship-prompt.git "$ZSH_CUSTOM/themes/spaceship-prompt"
   * ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH_CUSTOM/themes/spaceship.zsh-theme"
   * Abrir o arquivo ~/.zshrc, e alterar o ZSH_THEME de robbyrussell para spaceship
   * Configurações extras a incluir ao final do ~/.zshrc:
      ```
      APACESHIP_PROMPT_ORDER=(
        user
        dir
        host
        git
        exec_time
        line_sep
        vi_mode
        jobs
        exit_code
        char
        ) 

      APACESHIP_PROMPT_ADD_NEWLINE=FALSE
      APACESHIP_CHAR_SYMBOL=">"
      APACESHIP_CHAR_SUFFIX=" "  
      ´´´

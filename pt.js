export default {
  global: {
    name: 'Satellite.im',
    encrypted: 'Encriptado',
    unencrypted: 'Desencriptado',
  },
  ui: {
    talk: 'Fala livremente...',
    close: 'Sair',
    cancel: 'Cancelar',
    search: 'Pesquisar',
    home: 'Início',
    copied: 'Atenção: Copiado para a área de transferência',
    unpin: 'Desafixar',
    send: 'Enviar',
    emotes: 'Emoji',
    glyphs: 'Glyphs',
    fullscreen: 'Ecrã inteiro',
    exit_fullscreen: 'Sair de ecrã inteiro',
    more: 'Mais',
    are: 'estão',
    is: 'está',
  },
  wallet: {
    send_money: 'Enviar dinheiro',
  },
  messaging: {
    messages: 'Mensagens',
    groups: 'Grupos',
    pin: 'Fixar',
    reply: 'Responder',
    typing: 'escrever',
    many_typing: 'vários utilizadores estão a escrever',
  },
  controls: {
    copy_id: 'Copiar ID',
    share_link: 'Partilhar hiperligação',
    download: 'Descarregar',
    mic: 'Mic',
    headphones: 'Áudio',
    video: 'Vídeo',
    mute: 'Mute',
    toggle: 'Alternar',
    deafen: 'Silenciar',
    crop: 'Cortar',
    upload: 'Enviar',
    edit: 'Editar',
  },
  popups: {
    error: {
      text: 'Texto',
      title: 'Erro',
      user_agent: 'User Agent',
      source: 'Fonte',
      line: 'Linha',
      confirm: 'Confirmar',
      contact:
        'Oops! Algo errado aconteceu! Ajuda-nos a melhorar a tua experiência ao enviar um relatório de erro',
    },
  },
  files: {
    files: 'Ficheiros',
    upload: 'Enviar Ficheiro',
  },
  pages: {
    files: {
      refresh: 'Recarregar',
      new_folder: 'Nova Pasta',
      new_folder_prompt: 'Nova Pasta:',
      browse: {
        name: 'Nome',
        modified: 'Modificado',
        type: 'Tipo',
        encrypted: 'Encriptado',
        size: 'Tamanho',
        upload: 'Enviar Ficheiro',
      },
    },
    unlock: {
      decrypt: 'Desencriptar Conta',
      create: 'Criar Pin Conta',
      placeholder: 'Inserir Pin...',
      store_pin: 'Guardar Pin? (Menos Seguro)',
    },
    loading: {
      loading: 'Linking Satellites...',
    },
    disclaimer: {
      title: 'Criação Conta',
      subtitle:
        "Vamos criar uma conta para ti. No próximo ecrã, vais ver uma lista de palavras. Faz uma captura de ecrã ou aponta isto. É a única maneira de recuperar a tua conta.",
      create: 'Criar Conta',
      or: 'Ou',
      import: 'Importar Conta',
    },
    inputAccount: {
      title: 'Importar Conta',
      subtitle: 'Insere a tua palavra-passe de 12 palavras.',
      enter: 'Insere Palavra-Passe',
      recover: 'Recuperar Conta',
    },
    phrase: {
      title: 'Combinação de Recuperação',
      done: 'Guardei',
      write_down: 'Aponta isto.',
    },
    settings: {
      settings: 'Definições',
      motion: 'Motion',
      never: 'Nunca',
      always: 'Sempre',
      aspect_ratio_label: 'Aspect Ratio Off?',
      app_info: 'Informação da Aplicação',
      info: {
        title: 'Informação da Aplicação',
        subtitle: 'Em baixo encontras informação que pode ser útil ao criar relatórios de erro ou a programar a nossa aplicação.',
      },
      developer: {
        title: 'Developer Settings',
        subtitle:
          'Mock data and tweak settings for testing. This page is really just for internal use.',
        identifier: 'Identifier',
      },
      notifications: {
        title: 'Definições de Notificações',
        notes:
          'Notifications work different on every platform. On Web, you need to request notifications. On Desktop and Android notifications are enabled by default.',
        enabled: 'Enable or Disable Notifications',
        labels: {
          current_platform: 'Your current platform is:',
        },
        web: {
          granted:
            'Na versão web do Satellite, precisas de desativar notificações no teu browser para este site.',
          denied:
            "Não podemos voltar a pedir-te permissão para notificações na versão web do Satellite. Precisas de configurar as notificações para este site para 'pedir' ou 'permitir'",
        },
        send_label: 'Enviar Notificação',
        send_placeholder: 'Conteúdo que queres que apareça nas tuas notificações locais',
      },
      audio: {
        title: 'Áudio',
        sources: {
          title: 'Fontes de Áudio',
          subtitle: 'Entrada e Saída de dispositivos que queres que o Satellite use.',
          permissionButtonText: 'Pedir Permissão',
          permissionRequestMessage: '',
          permissionDeniedMessage:
            "Negaste permissão de microfone portanto não podemos verificar que dispositivos tens. Por favor, permite acesso ao microfone no teu browser.",
          browserDoesNotSupportAudioOutChange:
            'O teu Browser não suporta definições de saída de áudio, portanto o básico é usado aqui. Para mudar isto, usa um browser baseado em Chrome ou atualiza o teu áudio de saída padrão no teu OS.',
          input: {
            title: 'Entrada de Áudio',
            subtitle:
              "Selecciona a partir de quais dispositivos de entrada de áudio queres que as pessoas te ouçam.",
          },
          output: {
            title: 'Saída de Áudio',
            subtitle:
              "Selecciona em que dispositivo queres receber áudio.",
          },
        },
        bitrate: {
          title: 'Transmissão de Áudio',
          subtitle:
            'Com uma taxa de transmissão mais elevada, receberás áudio com maior qualidade, diminuir a taxa de transmissão pode ajudar com velocidades de ligação lentas.',
        },
        sampleSize: {
          title: 'Sample Size',
          subtitle:
            'A higher sample size will give you a broader dynamic range of audio. Higher samples require better connections.',
        },
        volume: {
          title: 'Output Volume',
        },
        inputVolume: {
          title: 'Input Volume',
        },
        systemVolume: {
          title: 'System Volume',
        },
        echo: {
          title: 'Echo Cancellation',
          subtitle:
            'Enable to help cancel out some slight echo & feedback from your mic.',
        },
        noise: {
          title: 'Noise Suppression',
          subtitle: 'Enable to help hide background noise in your environment.',
        },
      },
      video: {
        title: 'Video',
        sources: {
          permissionDeniedMessage:
            "You have denied camera access so we can't see what devices you have. Please allow camera access in your browser.",
          input: {
            title: 'Video Input',
            subtitle:
              "Select which video device you'd like to share your beautiful smile from.",
          },
        },
      },
      screen: {
        title: 'Screen Share',
        captureMouse: {
          title: 'Capture Mouse',
          subtitle: 'Would you like to share your mouse in screen shares?',
        },
      },
      keybinds: {
        title: 'Default Keybinds',
        subtitle:
          'A list of the default keybinds for quickly navigating and using Satellite.',
        mute: 'Toggle Mute',
        settings: 'Open Settings',
        deafen: 'Toggle Deafen',
        call: 'Call Active Chat',
      },
      accounts: {
        title: 'Accounts & Devices',
        subtitle:
          "Select with account you'd prefer to default transactions from.",
        active: 'Active Account',
        gas_price: 'Transaction Fee Limit',
        devices: 'Connected Devices',
        no_devices: 'No connected devices found.',
      },
      personalize: {
        title: 'Personalize Satellite',
        subtitle: 'Make it your own and choose custom colors & themes.',
        theme: 'Color Theme',
        language: 'Language',
      },
      network: {
        title: 'Realms',
        subtitle:
          "Change the realm Satellite lives in. Changing a realm will mean you can only communicate with others in the same realm as you. Please only change if you know what you're doing.",
        chain: 'Realm',
        network: 'Network',
        allow_embeds: 'Allow Embeds',
        allow_embeds_description:
          'Have Satellite try to load videos and link previews. This sends a request to the URL someone shares with you to get more information/embed the content from the source and may allow the site to track you.',
      },
      storage: {
        title: 'Storage',
        subtitle:
          'Control how your data is stored. You can export your local storage information as well as reset Satellite here. Be careful resetting your local storage will clear out your account.',
        clear: {
          title: 'Clear Storage',
          subtitle:
            'Reset Satellite. This will clear any saved accounts. Do not do this without backing up your account first.',
          button: 'Clear Local Storage',
        },
        export: {
          title: 'Export Storage',
          subtitle:
            "Export your local storage, it's your data you can do whatever you'd like with it.",
          button: 'Export Local Storage',
        },
      },
      profile: {
        title: 'Profile',
        subtitle: 'Update your profile photo, status, banners and more.',
        info: {
          title: 'Account Info',
          subtitle:
            'Below is a list of helpful information regaurding your account.',
          accountID: 'Account Identifier',
          badges: 'Badges',
          preferences: 'Preferences',
          location: 'Location',
          selectLocation: 'Select Location',
          language: 'Language',
          selectLanguage: 'Select Language',
        },
        phrase: {
          title: 'Recovery Phrase',
          subtitle:
            'Do not share this phrase with anyone. This phrase is used to recover your account. Anyone with access to this has access to your account.',
        },
      },
    },
    chat: {
      new_message: 'messages',
      jump_to_current: 'View New Messages',
      chat_now: 'chat now',
      add_member: 'Add Member +',
      switch_chat: 'Switch Chat',
      start_watch_party: 'Watch Party',
    },
  },
  servers: {
    new_server: 'New Community',
    create: {
      heading: 'Create a server',
      photo_text:
        "Give your server a face. Chose a memorable photo to show it's members.",
      photo_button: 'Set photo',
      server_name: 'Enter a server name',
      server_name_placeholder: 'Server name...',
      create_server: 'Create server',
      select_friends: 'Invite your friends to this server',
      select_friends_placeholder: 'Search friends...',
    },
  },
  conversation: {
    encrypted: 'Messages are secured by end to end encryption.',
    reply: 'reply | replies',
    reply_to: 'Reply to',
    multimedia: 'Multimedia content',
    collapse: 'Collapse',
  },
  errors: {
    accounts: {
      pin_too_short: 'Pin must be at least 5 characters.',
      invalid_pin: 'Pin does not match',
    },
    friends: {
      request_already_sent: 'You have already sent a request to this user',
      request_already_accepted: 'This user is already in your friends',
      friend_info_not_found: 'Seems that this user is not registered',
      textile_not_initialized: 'Your account is not ready. Try later',
    },
    chat: {
      drop_file_count: 'Sorry, you can only upload 4 files at a time',
      unable_preview: 'Unable to preview file',
      upload_blocked: 'Upload Blocked',
    },
  },
  search: {
    input: {
      search_options: 'SEARCH OPTIONS',
      search_for: 'SEARCH FOR',
    },
    result: {
      search_results: 'Search results',
      more_filters: 'More filters',
      results: 'Results',
    },
  },
  media: {
    settings: {
      audio_quality: 'Audio Quality',
      bitrate: 'Bitrate',
      sample_size: 'Sample size',
      video_quality: 'Video Quality',
      no_options: 'No options',
      stream_options: 'Stream Options',
    },
  },
  user: {
    registration: {
      create: 'Registration',
      sign_in: 'Sign in',
      photo_text:
        'Customize how the world sees you, choose something memorable.',
      username: 'Username',
      username_placeholder: 'Neil Spaceman...',
      status: 'Status',
      status_placeholder: 'Ready for launch...',
      reg_status: {
        unknown: 'Not registered',
        in_progress: "We're transporting your data to the Realm...",
        funding_account: 'Making contact, requesting entry to Realm...',
        sending_transaction: 'Request Approved! Now entering the Realm...',
        registered: 'Grats! Your a brand new citizen on the Realm.',
      },
    },
    loading: {
      loading_account: 'Aligning satellites to retrieve your account...',
    },
  },
  friends: {
    friends: 'Friends',
    self_add: "You can't add yourself you silly goose.",
    already_friend: "You're already friends with this user.",
    not_found: "Hmm, we couldn't find a user at that address",
    invalid_id: 'Invalid account ID',
    request_sent: 'Friend request successfully sent!',
    search_placeholder: 'Some User...',
    add: 'Add Friend',
    add_description:
      "Enter your friend's account ID or nickname. Account IDs are case sensitive.",
    add_qrcode_description:
      'You can also add a friend by having them scan your QR code, or by scanning theirs.',
    scan_code: 'Scan a Friend Code',
    camera_scan: 'Allow Camera Scan',
    friend_code: 'Your Friend Code',
  },
  market_place: {
    title: 'Marketplace',
  },
}

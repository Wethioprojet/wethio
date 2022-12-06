var language; 
function setLanguage() {
  
    var lang = document.getElementById("langselector").value;
  
    var en = {
        "date": "Date", 
        "save": "Save",
        "cancel": "Cancel",
        "banner_text":"Align Yourself with Africa’s Potential",
        "banner_des":"First disruptive community in Africa",
        "wethio_blockchain_text":"Wethio Project built on Africa’s first native Blockchain",
        "button_text":"I want it !!",
        "gobal_network_heading":"Wethio Project built on Africa’s first native Blockchain",
        "gobal_network_subText1":"Driven by an innovative and ethical mining protocol, Wethio Project provides access to dApps and crypto assets that offer private and institutional investors from around the world an opportunity to invest, equitably and securely, in the extraordinary potential of the African continent.",
        "gobal_network_subText2":"While economies and population living deeply crisis or huge transformation, Wethio Project set out to purpose a viable alternativ and secure path :",
        "text_center":"Metrics",
        "gobal_network_subText3":"Create a vast network based on blockchain, ethics and creativity",
        "wethio_ecosystem_text":"Wethio Project Ecosystem",
        "wethio_ecosystem_subtext":"With transaction speeds of under 3 seconds, Crypto assets on numerous platforms, fully developed dApps, and its very own Cryptocurrency Exchange Platform with NFT capabilities, Wethio Project represents a fully integrated ecosystem, with all participating actors sharing in the opportunity that it presents and the wealth that it generates",
        "empower_Heading":"Build Partnerships",
        "empower_subtext":"Wethio means “Exchange” In the East African Wolof language. Wethio Project was conceived to empower individuals and teams from all over the world to realise their potential, build synergies, and give life to their creative solutions in a totally secure and decentralized environment.",
        "empower_moreSubtext":"The Wethio project foundation enables and supports you to design your own way of life and realize your projects to the extent of your ambitions.",
        "we_are_text":"We are nomads :",
        "we_are_subtext":"With offices on three continents, Wethio Project continues to evolve and develop, building connections with people of good will, wherever they may be.",
        "enjoy_new_economy_text":"Wethio Project Assets",
        "writing_history_heading":"Writing History",
        "writing_history_subText":" Learn about where we’ve been so far then check out our roadmap to find out where we’re heading",
        "featured_on_heading":"Featured on",
        "stay_up_text":"STAY UP TO DATE ON",
        "all_things_text":"ALL THINGS WETHIO PROJECT",
        "network_animator":"Become Network Animator",
        "join_movement":"Join the movement",
        "project_going_heading":" A project going above us",
        "project_going_content":"Engage with the lovely Wethio Project community of builders, miners, users, and enthusiasts of all kinds.",
        "Join_the_community":"Join the community",
        "Follow_learn_and_enjoy":"Follow, learn and enjoy",
        "Contact_us_heading":"Contact us",
        "communities_text":"For communities",
        "Successful_ICO":"Successful ICO",
        "Financial_institutions":"Financial institutions and public sector bodies can Raised more $8M from 4,4K people in over the world",
        "Listing_Launch":"Listing Launch",
        "First_Listings":"First Listings Idax | Bibox",
        "Successful_Audit":"Wethio Blockchain Successful Audit",
        "Zyrri_Smart_Contract":"Zyrri Smart Contract Deployed The referencetoken for Tumaini ecovillages",
        "Mainet_Blockchain_Wethio":"Mainet Blockchain Wethio Deployment",
        "Wethio_Wallet_Dapps":"Wethio Wallet Dapps Wethio Master Dapps",
        "New_Zynecoin_Listing":"New Zynecoin Listing on Probit.com",
        "Afrix_Smart_Contract":"Afrix Smart Contract Development The Go-Token for WethioX eXchange",
        "Wethio_Pool_Dapps":"Wethio Pool Dapps Deployment",
        "Wethio_Bridge_Platform":"Wethio Bridge Platform Launchment",
        "Opening_Offices":"Opening Offices in Dubaï",
        "WethioX_Cex":"Deployment of WethioX Cex",
        "WethioX_release":"WethioX release on Ios and Androïd",
        "WethioNFT_Deployment":"WethioNFT Deployment",
        "Promotional_marketing":"Promotional marketing campaign",
        "International_events":"International events",
        "Digital_Incubator":"Digital Incubator",
        "pro_ecosys_wethio_africa":"Wethio Blockchain brings a powerful blockchain solution to the world in the most sustainable and collaborative way",
        "pro_ecosys_wethio_africa2":"With the PoSV mechanism in place Wethio Blockchain is the next evolution of the Proof of Stack (PoS) consensus algorithm.",
        "read_doc":"Read Documentation",
        "explore_now":"Explore Now",

        "pro_ecosys_wethio_x":"WethioX is designed to become the exchange of reference in Africa and to be a major asset in the world offering an ecosystem based on ethical finance.",
        "acc_create":"Accounts created :",
        "wethio_x_amt":"7000",
        "wethio_x_trade":"Trade Now",

        "pro_ecosys_wethio_wallet":"To store tokens issued on Wethio Blockchain, Wethio Wallet is a convenient and secure wallet for ZRCs Holders.",
        "wethio_wallet_amt":"< 12000",
        "acc_create_weithio_wallet":"Accounts created :",
        "wethio_wallet_dwnwallet":"Download Wallet",

        "pro_ecosys_wethio_master":"Platform to secure Wethio Blockchain with 157 Masternodes Voting, tracking rewards, and viewing performance of Masternodes for securing Wethio Blockchain",
        "wethio_master_contri": "Contribute Now",

        "wethio_scan":"Blockexplorer for Wethio Blockchain",
        "wethio_scan2":"Providing transparency for Wethio Blockchain by scanning blocks, transactions, technical visualisation, performance and token holders statistics",
        "explore_wethio_scan":"Explore",

        "wethio_pool":"A decentralized staking service protocol running on Wethio blockchain.",
        "wethio_pool2":"Maximize the decentralization in masternode-based governance system of Wethio by giving every staker the right to vote for the masternode decision.",
        "stake_wethio_pool":"Stake Now",

        "bridge_wethio":"A cross-chain swapping bridge to connect Wethio Blockchain, Ethereum and Binance Smart Chain",
        "bridge_wethio2":"Swapping ZRC to/from Binance and Ethereum Blockchains; and tokens on other chains to/from Wethio Blockchain tokens from a single web interface",
        "bridge_wethio_swp":"Swap Now",
        
        "issuer_wethio":"Providing a friendly user interface and back-end mechanism to issue ZRC20 and ZRC21 tokens in only a few steps",
        "issue_enjoy_now":"Enjoy Now",
        
        "nft_wethio":"The easiest, most affordable, and most straight-forward way to create, sell, buy, and trade NFTs is ready for you.",
        "nft_wethio2":"Wethio NFT also offering a exceptionnal NFTs collection based on Gold",
        "nft_get_started":"Get Started",

        "stats_wethio":"Explore the Wethio blockchain: statistics, validators, token and staking metrics and news about the overall ecosystem.",
        "stats_expolre":"Explore",

        "enjoy-new-economy-text":"Enjoy new economy",

        "zynecoin":"Zynecoin is the main moneyness of the Wethio Blockchain (ticker: ZYN). It is distributed, exchanged and stored using a decentralized ledger system",
        "zynecoin2":"There are no intermediaries, payment gateways or banks.",
        "zynecoin3":"Zynecoin is the fuel of the Wethio Blockchain with which gas fees are paid.", 
        "zyne_white_papar":"White Paper",
        "zyne_trade_now":"Trade Now",
       
        "zyrri":"Bringing trust, privacy, and security to Web3 through sustainable ecovillages network",
        "zyrri2":"Zyrri allow you to access sustainable Tumainï community.",
        "zyrri_white_paper":"White Paper",
        "zyrri_discover_now":"Discover now",
       
        "afrix":"Afrix is ​​the token of the WethioX crypto-asset exchange platform.",
        "afrix2":"The Afrix opens the doors to African potential. Multi-use (transaction payment, reduced fees on WethioX and much more …)",
        "afrix_light_paper":"Light Paper",
        "afrix_trade_now":"Trade Now",
      
        "glouki":"Glouki is designed for kids to allow them accessibility on the Wethio network and Web3.0 economy",
        "glouki2":"Glouki s is not only a meme but also a educational-based cryptocurrency",
        "glouki_buy_now":"Buy Now",

        "inquiries_text":"For media inquiries:",
        "partnership_text":"For partnership",
        "collaboration_text":"Interested in collaboration?",
        "Contact_Support":"Contact Support",
        "partnership_text":"For partnership",
        "collaboration_text":"Interested in collaboration?",
        "Contact_Support":"Contact Support",
        "need_help":"In need of help ?",
        "General_inquiries":"General inquiries",
        "email_text":"Email", 
        "name_text":"Name", 
        "phone_text":"Phone Number", 
        "country_text":"Country", 
        "business_text":"Business / Organisation", 
        "subject_text":"Subject", 
        "message_text":"Message", 
        "collaboration_text":"Interested in collaboration?",
        "Contact_Support":"Contact Support",
        "send_message_text":"Send Message",
        "custom_Checkbox_text":"I consent to having Wethio Project my submitted information so they can respond to my inquiry.",
        "Products_text":"Products",
        "Development_text":"Development",
        "token_text":"Tokens",
        "legal_text":"Legal",
        "footer_text":"Disclaimer: The information provided shall not in any way constitute   a recommendation as to whether you should invest in any product discussed. GLOUKICOINs team accepts no liability for any loss occasioned to any person acting or refraining from action as a result of any material provided or published. Gloukicoin is not a security as per US financial regulation, Europe, UK, Canada or any other regulation. gloukicoin’s team, developers and other stakeholder created this token for fun and meme only. The ownership of $GLOUKI coin does not give any right of return, vote, management or any other right. This is a MEME COIN.",
    }
    
    var es = {
        "date": "Fecha", 
        "save": "Salvar",
        "cancel": "Cancelar",
        "banner_text": "Associez-vous au potentiel de l’Afrique",
        "banner_des":"Première communauté disruptive en Afrique.",
        "wethio_blockchain_text":"Wethio Projet est bâti autour la première blockchain africaine",
        "gobal_network_subText1":"A travers un protocole de distribution des commissions de. Minage original et éthique Wethio Project donne. Accès à des dApps et des actifs qui permettent aux investisseurs privé et institutionnels du monde entier d’investir de façon équitable sur le potentiel extraordinaire présent et à venir du continent africain",
        "gobal_network_heading":"Wethio Projet est bâti autour la première blockchain africaine",
        "gobal_network_subText2":"Alors que les économies et les populations vivent des crises profondes ou des transformations importantes, le projet Wethio se propose de proposer une alternative viable et sûre :",
        "text_center":"Metrics",
        "gobal_network_subText3":"Créer un vaste réseau basé sur la blockchain, l'éthique et la créativité.",
        "wethio_ecosystem_text":"L’écosystème de Wethio Project",
        "wethio_ecosystem_subtext":"Depuis les dApps développées, en passant par les actifs côtés, jusqu’à sa propre plateforme d’échange, Wethio Project représente un eco systeme intégré générateur de richesses partagées entre tous les différents acteurs",
        "empower_Heading":"Nouer des partenariats :",
        "empower_subtext":"Wethio, signifie « échanges » en langue walof. La raison d’être de Wethio Project, est de permettre aux individus et aux équipes partout dans le monde de lier de créer des synergies afin de potentialiser leur créativité de manière totalement décentralisée et devenir ainsi des acteurs de l’Histoire qui ouvriront de  nouvelles voies.",
        "empower_moreSubtext":"La fondation du projet Wethio vous permet et vous soutient pour concevoir votre propre mode de vie et réaliser vos projets à la mesure de vos ambitions.",
        "we_are_text":"Nous sommes des nomades",
        "we_are_subtext":"Présents aujourd’hui sur 3 continents, Wethio Project, continuera son développement afin de créer des liens d proximité partout où se trouvent des humains de bonne volonté ",
        "enjoy_new_economy_text":"Les actifs de Wethio Project",
        "writing_history_heading":"Notre histoire",
        "writing_history_subText":"Découvrez ce que nous avons fait jusqu'à présent, puis consultez notre feuille de route pour savoir où nous allons.",
        "featured_on_heading":"On parle de nous",
        "stay_up_text":"RESTEZ AU COURANT DE TOUT CE QUI",
        "all_things_text":"CONCERNE LE PROJET WETHIO",
        "network_animator":"Devenez Animateur réseau",
        "join_movement":"Joignez le mouvement",
        "project_going_heading":"Notre communauté",
        "project_going_content":"Participez à la belle communauté du projet Wethio, composée de constructeurs, de mineurs, d'utilisateurs et de passionnés de toutes sortes.",
        "Join_the_community":"Rejoignez la communauté",
        "Follow_learn_and_enjoy":"Suivre, apprendre et apprécier",
        "Contact_us_heading":"Contactez nous",
        "communities_text":"Nos communautés",
        "Successful_ICO":"Succès de l'ICO",
        "Financial_institutions":"Nous avons levé près de 8M d'euros auprès de 4000 investisseurs",
        "Listing_Launch": "Lancement du listing",
        "First_Listings":"Premier listings du Zynecoin sur Idax et Bibox",
        "Successful_Audit":"Audition réussie pour Wethio Blockchain",
        "Zyrri_Smart_Contract":"Smart-Contrat du Zyrri déployé",
        "Mainet_Blockchain_Wethio":"Déploiement du Mainet de Wethio Blockchain",
        "Wethio_Wallet_Dapps":"Wethio Wallet Dapps Wethio Master Dapps",
        "New_Zynecoin_Listing":"Nouveau listing du Zynecoin sur Probit",
        "Afrix_Smart_Contract":"Développement du smart contrat de l'AfriX",
        "Wethio_Pool_Dapps":"Déploiement de Wethio Pool",
        "Wethio_Bridge_Platform":"Lancement de Wethio Bridge",
        "Opening_Offices":"Ouverture du bureau de Dubaï",
        "WethioX_Cex":"Déploiement de l'Exchange WethioX",
        "WethioX_release":"Lancement de l'application WethioX sur iOS et Androïd",
        "WethioNFT_Deployment":"Déploiement de Wethio Pool",
        "Promotional_marketing":"Campagne de promotion internationale",
        "International_events":"Évènements internationaux",
        "Digital_Incubator":"Incubateur digital",
      
        "pro_ecosys_wethio_africa":"Wethio Blockchain apporte une solution blockchain puissante au monde de la manière la plus durable et la plus collaborative qui soit.",
        "pro_ecosys_wethio_africa2":"Avec le mécanisme PoSV en place, Wethio Blockchain est la prochaine évolution de l'algorithme de consensus Proof of Stack (PoS).",
        "read_doc":"Lire la documentation",
        "explore_now":"Explorer",

        "pro_ecosys_wethio_x":"WethioX a pour vocation de devenir l'exchange de référence en Afrique et d'être un atout majeur  le monde en proposant un écosystème basé sur la ﬁnance éthique.",
        "acc_create":"Comptes crées :",
        "wethio_x_amt":"7000",
        "wethio_x_trade":"Echanger",

        "pro_ecosys_wethio_wallet":"Pour stocker les jetons émis sur la blockchain Wethio, Wethio Wallet est un portefeuille pratique et sécurisé pour les détenteurs de WRC.",
        "wethio_wallet_amt":"< 12000",
        "acc_create_weithio_wallet":"Nombre de portefeuilles :",
        "wethio_wallet_dwnwallet":"Download Wallet",

        "pro_ecosys_wethio_master":"Plateforme pour sécuriser la blockchain Wethio avec 157 Masternodes Vote, suivi des récompenses et des performances des Masternodes pour sécuriser la blockchain Wethio.",
        "wethio_master_contri": "Contribuer",

        "wethio_scan":"L' Explorer de la Blockchain Wethio",
        "wethio_scan2":"Assurer la transparence de Wethio Blockchain en analysant les blocs, les transactions, la visualisation technique, les performances et les détenteurs de jetons.",
        "explore_wethio_scan":"Explorer",

        "wethio_pool":"Un protocole de service de jalonnement décentralisé fonctionnant sur la blockchain Wethio.",
        "wethio_pool2":"Maximiser la décentralisation dans le système de gouvernance basé sur les masternodes de Wethio en donnant à chaque staker le droit de voter pour la décision du masternode.",
        "stake_wethio_pool":"Staker",

        "bridge_wethio":"Une passerelle d'échange inter-chaînes pour connecter Wethio Blockchain, Ethereum et Binance Smart Chain",
        "bridge_wethio2":"Swap de WRC vers/depuis les blockchains Binance et Ethereum, et de jetons d'autres chaînes vers/depuis les jetons de la blockchain Wethio à partir d'une interface web unique.",
        "bridge_wethio_swp":"Swaper",
        "issuer_wethio":"Fournir une interface utilisateur conviviale et un mécanisme back-end pour émettre des jetons WRC20 et WRC21 en quelques étapes seulement.",
        "issue_enjoy_now":"Découvrir",
        "nft_wethio":"Le moyen le plus simple, le plus abordable et le plus direct de créer, vendre, acheter et échanger des NFT est prêt pour vous.",
        "nft_wethio2":"Wethio NFT o re également une collection exceptionnelle de NFTs basée sur l'or.",
        "nft_get_started":"Commencez",
        
        "stats_wethio":"Explorez la blockchain Wethio : statistiques, validateurs, informations sur le staking, et actualités de l'écosystème global.",
        "stats_expolre":"Explore",

        "enjoy-new-economy-text":"Proﬁtez de la nouvelle économie",
        
        "zynecoin":"Le projet Wethio fournit une monnaie numérique appelée Zynecoin (ZYN) qui estdistribuée, échangée et stockée à l'aide d'un système de grand livre (dé)centralisé.",
        "zynecoin2":"Il n'y a pas d'intermédiaires, de passerelles de paiement ou de banques.",
        "zynecoin3":"", 
        "zyne_white_papar":"Livre blanc",
        "zyne_trade_now":"Acheter",
       
        "zyrri":"Apporter la conﬁance, la conﬁdentialité et la sécurité au Web3 grâce à un réseau d'écovillages durables",
        "zyrri2":"Zyrri vous permet d'accéder à des écovillages Tumainï durables.",
        "zyrri_white_paper":"Livre blanc",
        "zyrri_discover_now":"Découvrir",
       
        "afrix":"Afrix est le token de la plateforme d'échange de crypto-actifs WethioX.",
        "afrix2":"L'Afrix ouvre les portes du potentiel africain. Token multi-usage (paiement des transactions, réduction des  sur WethioX et bien plus encore...)",
        "afrix_light_paper":"Papier blanc",
        "afrix_trade_now":"Acheter",
       
        "glouki":"Glouki est conçu pour les enfants aﬁn de leur permettre d'accéder au réseau Wethio et à l'économie Web3.0.",
        "glouki2":"Glouki n'est pas seulement un mème mais aussi une crypto-monnaie éducative.",
        "glouki_buy_now":"Acheter",
        "inquiries_text":"Pour les demandes de médias",
        "partnership_text":"Pour les partenariats",
        "collaboration_text":"Intéressé dans une collaboration ?",
        "Contact_Support":"Contactez le support",
        "need_help":"Besoin d’aide ?",
        "General_inquiries":"Demande générale",
        "email_text":"Email", 
        "name_text":"Nom", 
        "phone_text":"Numéro de téléphone", 
        "country_text":"Pays", 
        "business_text":"Société", 
        "subject_text":"Sujet", 
        "message_text":"Message", 
        "send_message_text":"Envoyer le message ",
        "custom_Checkbox_text":"Je consens à ce que Wethio Project collecte les informations que j'ai fournies afin de pouvoir répondre à ma demande.",
        "Products_text":"Produits",
        "Development_text":"Développement",
        "token_text":"Actifs",
        "legal_text":"Légal",
        "footer_text":"Disclaimer: The information provided shall not in any way constitute a recommendation as to whether you should invest in any product discussed. GLOUKICOINs team accepts no liability for any loss occasioned to any person acting or refraining from action as a result of any material provided or published. Gloukicoin is not a security as per US financial regulation, Europe, UK, Canada or any other regulation. gloukicoin’s team, developers and other stakeholder created this token for fun and meme only. The ownership of $GLOUKI coin does not give any right of return, vote, management or any other right. This is a MEME COIN.",

    }
//     $.ajax({
//       dataType: "json",
//       url: './language/eng.json',
//       success: function (lang) 
//  {
//     console.log("getlndsdsg"+lang);
//       language = lang
//   }
//     });
language = en;
    switch(lang)
    {
        
      case "en":
          language = en;
          break;
        case "es":
          language = es;
          break;
        default:
          language = en;
    }

    $('.banner-text').text(language.banner_text); 
    // $('.banner_des').text(language.banner_des); 
    $('.wethio-blockchain-text').text(language.wethio_blockchain_text); 
    // $('.btn-danger').text(language.button_text); 
    $('.banner-text').text(language.banner_text); 
    $('.gobal_network_heading').text(language.gobal_network_heading); 
    $('.gobal_network_subText1').text(language.gobal_network_subText1); 
    // $('.gobal_network_subText2').text(language.gobal_network_subText2); 
    // $('.text-center').text(language.text_center); 
    // $('.gobal_network_subText3').text(language.gobal_network_subText3); 
    $('.wethio_ecosystem_text').text(language.wethio_ecosystem_text); 
    $('.wethio_ecosystem_subtext').text(language.wethio_ecosystem_subtext);
    $('.empower_Heading').text(language.empower_Heading); 
    $('.empower_subtext').text(language.empower_subtext); 
    // $('.empower_moreSubtext').text(language.empower_moreSubtext);
    $('.we_are_text').text(language.we_are_text); 
    $('.we_are_subtext').text(language.we_are_subtext);
    $('.enjoy-new-economy-text').text(language.enjoy_new_economy_text); 
    $('.writing-history-heading').text(language.writing_history_heading);
    $('.writing-history-subText').text(language.writing_history_subText); 
    $('.featured-on-heading').text(language.featured_on_heading);
    $('.stay-up-text').text(language.stay_up_text); 
    $('.all-things-text').text(language.all_things_text);
    $('.network-animator').text(language.network_animator);
    $('.join-movement').text(language.join_movement);
    $('.project-going-heading').text(language.project_going_heading);
    $('.project-going-content').text(language.project_going_content);
    $('.Join-the-community').text(language.Join_the_community);
    $('.Follow-learn-and-enjoy').text(language.Follow_learn_and_enjoy);
    $('.Contact-us-heading').text(language.Contact_us_heading);
    $('.communities-text').text(language.communities_text);
    $('.Successful_ICO').text(language.Successful_ICO);
    $('.Listing_Launch').text(language.Listing_Launch);
    $('.First_Listings').text(language.First_Listings);
    $('.Successful_Audit').text(language.Successful_Audit);
    $('.Zyrri_Smart_Contract').text(language.Zyrri_Smart_Contract); 
    $('.Mainet_Blockchain_Wethio').text(language.Mainet_Blockchain_Wethio);
    $('.Wethio_Wallet_Dapps').text(language.Wethio_Wallet_Dapps); 
    $('.New_Zynecoin_Listing').text(language.New_Zynecoin_Listing);
    $('.Afrix_Smart_Contract').text(language.Afrix_Smart_Contract); 
    $('.Wethio_Pool_Dapps').text(language.Wethio_Pool_Dapps);
    $('.Wethio_Bridge_Platform').text(language.Wethio_Bridge_Platform); 
    $('.Opening_Offices').text(language.Opening_Offices);
    $('.WethioX_Cex').text(language.WethioX_Cex); 
    $('.WethioX_release').text(language.WethioX_release);
    $('.WethioNFT_Deployment').text(language.WethioNFT_Deployment); 
    $('.happiness-section-text').text(language.happiness_section_text);
    $('.Promotional_marketing').text(language.Promotional_marketing);
    $('.International_events').text(language.International_events); 
    $('.Digital_Incubator').text(language.Digital_Incubator);
    $('.pro-ecosys-wethio-africa').text(language.pro_ecosys_wethio_africa); 
    $('.pro-ecosys-wethio-africa2').text(language.pro_ecosys_wethio_africa2); 
    $('.read-doc').text(language.read_doc);
    $('.explore-now').text(language.explore_now);
    $('.pro_ecosys_wethio_x').text(language.pro_ecosys_wethio_x);
    $('.acc_create').text(language.acc_create);
    $('.wethio_x_amt').text(language.wethio_x_amt);
    $('.wethio_x_trade').text(language.wethio_x_trade);
    $('.pro_ecosys_wethio_wallet').text(language.pro_ecosys_wethio_wallet);
    $('.wethio_wallet_amt').text(language.wethio_wallet_amt);
    $('.acc_create_weithio_wallet').text(language.acc_create_weithio_wallet);
    $('.wethio_wallet_dwnwallet').text(language.wethio_wallet_dwnwallet);
    $('.pro_ecosys_wethio_master').text(language.pro_ecosys_wethio_master);
    $('.wethio_master_contri').text(language.wethio_master_contri);
    $('.wethio_scan').text(language.wethio_scan);
    $('.wethio_scan2').text(language.wethio_scan2);
    $('.explore_wethio_scan').text(language.explore_wethio_scan);
    $('.wethio_pool').text(language.wethio_pool);
    $('.wethio_pool2').text(language.wethio_pool2);
    $('.stake_wethio_pool').text(language.stake_wethio_pool);
    $('.bridge_wethio').text(language.bridge_wethio);
    $('.bridge_wethio2').text(language.bridge_wethio2);
    $('.bridge_wethio_swp').text(language.bridge_wethio_swp);
    $('.issuer_wethio').text(language.issuer_wethio);
    $('.issue_enjoy_now').text(language.issue_enjoy_now);
    $('.nft_wethio').text(language.nft_wethio);
    $('.nft_wethio2').text(language.nft_wethio2);
    $('.nft_get_started').text(language.nft_get_started);
    $('.stats_wethio').text(language.stats_wethio);
    $('.stats_expolre').text(language.stats_expolre);

    $('.zynecoin').text(language.zynecoin);
    $('.zynecoin2').text(language.zynecoin2);
    $('.zynecoin3').text(language.zynecoin3);
    $('.zyne_white_papar').text(language.zyne_white_papar);
    $('.zyne_trade_now').text(language.zyne_trade_now);
    $('.zyrri').text(language.zyrri);
    $('.zyrri2').text(language.zyrri2);
    $('.zyrri_white_paper').text(language.zyrri_white_paper);
    $('.zyrri_discover_now').text(language.zyrri_discover_now);
    $('.afrix').text(language.afrix);
    $('.afrix2').text(language.afrix2);
    $('.afrix_light_paper').text(language.afrix_light_paper);
    $('.afrix_trade_now').text(language.afrix_trade_now);
    $('.glouki').text(language.glouki);
    $('.glouki2').text(language.glouki2);
    $('.glouki_buy_now').text(language.glouki_buy_now);
    $('.inquiries-text').text(language.inquiries_text);
    $('.partnership_text').text(language.partnership_text);
    $('.collaboration_text').text(language.collaboration_text);
    $('.Contact_Support').text(language.Contact_Support);
    $('.need_help').text(language.need_help);
    $('.General_inquiries').text(language.General_inquiries);
    let emailText=language.email_text; 
    $(".email-text").attr("placeholder",emailText);
    let nameText=language.name_text; 
    $(".name_text").attr("placeholder",nameText);
    let phoneText=language.email_text; 
    $(".phone_text").attr("placeholder",language.phone_text);
    let countryText=language.country_text; 
    $(".country_text").attr("placeholder",countryText);
    let businessText=language.business_text; 
    $(".business_text").attr("placeholder",businessText);
    let subjectText=language.subject_text; 
    $(".subject_text").attr("placeholder",subjectText);
    let messageText=language.message_text; 
    $(".message_text").attr("placeholder",messageText);
 
    $('.Products_text').text(language.Products_text);  
     $('.Development_text').text(language.Development_text);
    $('.token_text').text(language.token_text);
    $('.legal_text').text(language.legal_text);
    $('.send_message_text').text(language.send_message_text);
    $('.custom_Checkbox_text').text(language.custom_Checkbox_text);
    $('.footer-section-text').text(language.footer_text); 
  }
  function onloadfunction()
 {
  
  setLanguage() 

 }



 function commonSetLanguageToggle(ele){
  
  
  let max_len_pack=ele.length;
  for(var i=0;i<max_len_pack;i++){
      if(ele.options[i].value==ele.value){
        var actEle=document.getElementsByClassName('lan-'+ele.options[i].value);
        for(var k=0;k<actEle.length;k++){
          actEle[k].style.display="block";
        }
      }else{
        var actEle=document.getElementsByClassName('lan-'+ele.options[i].value);
        for(var k=0;k<actEle.length;k++){
          actEle[k].style.display="none";
        }
      }
      
  }
}
function showDefaultLan(defLan){
  commonSetLanguageToggle(document.getElementById('langselector'));
}
window.onpaint=showDefaultLan('en');
//   local storge
//var language;  
// function getLanguage() {
   
// (localStorage.getItem('language') == null) ? setLanguage('en') : false;
// console.log("getlng");
// $.ajax({ 
// url:  './language/' +  localStorage.getItem('language') + '.json', 
// dataType: 'json', async: false, dataType: 'json', 
// success: function (lang) 
// {
//     console.log("getlndsdsg"+lang);
//      language = lang
//  } });
// }

// function setLanguage(lang) {
  
//     console.log("setlng");
// localStorage.setItem('language', lang);
// }



"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Shield,
  Users,
  Target,
  Award,
  ChevronRight,
  MapPin,
  Calendar,
  Building,
  Code,
  Lock,
  Terminal,
  TrendingUp,
} from "lucide-react"

export default function Portfolio() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-900 text-white py-6">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-cyan-400" />
              <h1 className="text-2xl font-bold">Portfolio Stage</h1>
            </div>
            <Badge variant="outline" className="border-cyan-400 text-cyan-400">
              Cybersécurité
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">
              Laucournet Thomas - Stage chez
              <span className="text-cyan-400 block mt-2">Cyber Guardian Challenge</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Découvrez mon parcours et mes apprentissages lors de mon stage dans le domaine de la cybersécurité. Une
              expérience enrichissante qui a façonné ma vision professionnelle et mes compétences techniques.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4" />
                <span>Cyber Guardians Challenge</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Toulouse</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>23 mai - 16 juin 2025 (25 jours)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* Navigation rapide */}
        <section className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          <Card
            className="hover:shadow-lg transition-shadow cursor-pointer hover:bg-slate-50"
            onClick={() => scrollToSection("cadre-general")}
          >
            <CardContent className="p-6 text-center">
              <Building className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900">Cadre Général</h3>
              <p className="text-sm text-slate-600 mt-2">Présentation de l'association et du contexte du stage</p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg transition-shadow cursor-pointer hover:bg-slate-50"
            onClick={() => scrollToSection("missions")}
          >
            <CardContent className="p-6 text-center">
              <Target className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900">Mes Missions</h3>
              <p className="text-sm text-slate-600 mt-2">
                Découvrez les responsabilités et projets qui m'ont été confiés
              </p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg transition-shadow cursor-pointer hover:bg-slate-50"
            onClick={() => scrollToSection("competences")}
          >
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900">Compétences</h3>
              <p className="text-sm text-slate-600 mt-2">Les compétences techniques et transversales développées</p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg transition-shadow cursor-pointer hover:bg-slate-50"
            onClick={() => scrollToSection("bilan")}
          >
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900">Bilan Personnel</h3>
              <p className="text-sm text-slate-600 mt-2">Mon ressenti et les apprentissages de cette expérience</p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg transition-shadow cursor-pointer hover:bg-slate-50"
            onClick={() => scrollToSection("impact")}
          >
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900">Impact Futur</h3>
              <p className="text-sm text-slate-600 mt-2">L'influence de ce stage sur mon projet professionnel</p>
            </CardContent>
          </Card>
        </section>

        {/* À propos de cette expérience */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">À propos de cette expérience</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Je suis Thomas Laucournet, étudiant en 2ème année de Bachelor Informatique chez Ynov Campus, qui poursuit en
            3ème année Dev. Ce portfolio présente de manière détaillée mon expérience de stage chez Cyber Guardians
            Challenge (du 23 mai au 16 juin 2025), une association spécialisée dans la création de CTF cybersécurité.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Durant ces 25 jours (5 heures par jour), j'ai conçu les épreuves CTF pour leur événement annuel, une
            expérience qui m'a permis d'approfondir mes compétences techniques et de découvrir les enjeux de la
            cybersécurité appliquée.
          </p>
        </section>

        {/* 1. Présentation du cadre général */}
        <section id="cadre-general">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <Building className="h-8 w-8 text-cyan-600" />
            Cadre Général de l'Expérience
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-cyan-700">Informations Générales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-700">Entreprise/Association</h4>
                  <p className="text-slate-600">Cyber Guardians Challenge</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700">Localisation</h4>
                  <p className="text-slate-600">128 Avenue de Lombez, 31300</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700">Secteur d'activité</h4>
                  <p className="text-slate-600">
                    Association spécialisée dans la cybersécurité, l'organisation d'événements CTF (Capture The Flag),
                    la formation et la sensibilisation aux enjeux de sécurité informatique
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700">Durée du stage</h4>
                  <p className="text-slate-600">25 jours (5h/jour) - Du 23 mai au 16 juin 2025 (125 heures total)</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-cyan-700">Présentation de l'Association</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-700">Taille et Structure</h4>
                    <p className="text-slate-600">
                      Association bénévole avec un bureau de 7 personnes, dont une équipe technique de 4 dev
                      cybersécurité
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Activités Principales</h4>
                    <p className="text-slate-600">
                      Organisation d'événements CTF inter Campus, conférences de sensibilisation, partenariats avec des
                      entreprises du secteur
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Positionnement</h4>
                    <p className="text-slate-600">
                      Associations encore en developpement dans l'organisation de CTF éducatifs, associations reconnu et
                      en expension permanente
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 2. Missions et rôle */}
        <section id="missions">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <Target className="h-8 w-8 text-cyan-600" />
            Mes Missions et Mon Rôle
          </h2>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-cyan-700">Description de Mon Rôle</CardTitle>
              <CardDescription>
                Concepteur d'épreuves CTF - Spécialiste junior en création de challenges
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                En tant que concepteur d'épreuves CTF, j'ai été intégré à l'équipe technique pour créer et développer
                les différents défis de l'événement annuel "Summer CTF Challenge 2025". Mon rôle consistait à concevoir
                des challenges variés couvrant les domaines de la cryptographie, de la sécurité web, du reverse
                engineering et de la stéganographie, tout en respectant une progression pédagogique adaptée aux
                différents niveaux des participants.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-cyan-700">Tâches Concrètes Réalisées</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">
                      <strong>Cryptographie :</strong> Création de 8 défis (chiffrement César, RSA, AES, cryptanalyse)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">
                      <strong>Sécurité Web :</strong> Développement de 6 applications vulnérables (SQL injection, XSS,
                      CSRF)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">
                      <strong>Stéganographie :</strong> Conception de 5 challenges cachant des données dans images/audio
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">
                      <strong>Documentation :</strong> Rédaction de 25+ pages de solutions détaillées et guides
                      pédagogiques
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-cyan-700">Ma Place dans l'Organisation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-700">Rattachement Hiérarchique</h4>
                  <p className="text-slate-600">
                    <strong>Tuteur :</strong> Leo Brevière - Responsable technique et fondateur de l'association
                    <br />
                    <strong>Équipe :</strong> Intégré à l'équipe "CGC" (3 personnes)
                    <br />
                    <strong>Reporting :</strong> Points hebdomadaires + appel quotidien sur Discord
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700">Collaborations Transversales</h4>
                  <p className="text-slate-600">
                    • <strong>Équipe Infrastructure :</strong> Déploiement des challenges sur les servers
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 3. Compétences mobilisées */}
        <section id="competences">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <Award className="h-8 w-8 text-cyan-600" />
            Compétences Mobilisées
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-cyan-700">Outils Techniques Spécialisés</CardTitle>
                <CardDescription>Technologies et logiciels utilisés quotidiennement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      Langages de Programmation
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">JavaScript </Badge>
                      <Badge variant="secondary">PHP </Badge>
                      <Badge variant="secondary">Bash/Shell</Badge>
                      <Badge variant="secondary">SQL</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                      <Lock className="h-4 w-4" />
                      Outils de Cybersécurité
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Wireshark</Badge>
                      <Badge variant="secondary">Burp Suite Pro</Badge>
                      <Badge variant="secondary">Nmap</Badge>
                      <Badge variant="secondary">John the Ripper</Badge>
                      <Badge variant="secondary">Metasploit</Badge>
                      <Badge variant="secondary">OWASP ZAP</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                      <Terminal className="h-4 w-4" />
                      Infrastructure & DevOps
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Docker</Badge>
                      <Badge variant="secondary">Linux (Ubuntu)</Badge>
                      <Badge variant="secondary">Git/GitHub</Badge>
                      <Badge variant="secondary">Nginx</Badge>
                      <Badge variant="secondary">VirtualBox/VMware</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-cyan-700">Méthodes et Savoir-faire</CardTitle>
                <CardDescription>Approches méthodologiques appliquées</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-700">Approche Pédagogique</h4>
                    <p className="text-slate-600 text-sm">
                      • <strong>Progressive Disclosure :</strong> Difficulté croissante avec indices graduels
                      <br />• <strong>Learning by Doing :</strong> Challenges pratiques basés sur des cas réels
                      <br />• <strong>Gamification :</strong> Système de points et narratif engageant
                      <br />• <strong>Peer Learning :</strong> Encouragement des échanges entre participants
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Gestion de Projet</h4>
                    <p className="text-slate-600 text-sm">
                      • <strong>Agile/Scrum :</strong> Sprints de 1 semaine, daily stand-ups
                      <br />• <strong>Test-Driven :</strong> Validation systématique avant déploiement
                      <br />• <strong>Documentation :</strong> Rédaction technique et guides utilisateur
                      <br />• <strong>Version Control :</strong> Git flow avec branches par fonctionnalité
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-cyan-700">Compétences Transversales Développées</CardTitle>
              <CardDescription>Soft skills mis en œuvre avec exemples concrets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Autonomie et Initiative</h4>
                  <p className="text-slate-600 text-sm">
                    <strong>Exemple concret :</strong> Proposition et développement autonome d'un système de hints
                    dynamiques qui s'adaptent au niveau du participant. Initiative personnelle qui a été adoptée par
                    l'équipe et intégrée à la plateforme principale.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Créativité</h4>
                  <p className="text-slate-600 text-sm">
                    <strong>Exemple concret :</strong> Création du challenge "Digital Detective" combinant
                    stéganographie, cryptographie et OSINT dans un scénario d'enquête policière.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Curiosité Technique</h4>
                  <p className="text-slate-600 text-sm">
                    <strong>Exemple concret :</strong> Participation a un CTF pendant le stage pour découvrir de
                    nouvelles techniques.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 4. Bilan personnel */}
        <section id="bilan">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <Users className="h-8 w-8 text-cyan-600" />
            Bilan Personnel
          </h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-cyan-700">Mon Ressenti sur l'Expérience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-700">Ce que j'ai particulièrement aimé</h4>
                    <p className="text-slate-600">
                      La dimension créative de la conception de challenges m'a passionné. Pouvoir imaginer des scénarios
                      d'attaque réalistes tout en gardant un aspect pédagogique était un défi stimulant. J'ai également
                      apprécié l'esprit d'équipe et l'entraide constante entre les membres, créant un environnement
                      d'apprentissage exceptionnel. La diversité des domaines techniques abordés m'a permis de sortir de
                      ma zone de confort et d'élargir considérablement mes compétences.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Ce qui m'a surpris</h4>
                    <p className="text-slate-600">
                      La complexité de l'équilibrage des challenges m'a surpris : créer des épreuves ni trop faciles ni
                      trop difficiles nécessite une compréhension fine des différents niveaux des participants. J'ai
                      aussi été étonné par l'aspect psychologique du CTF : comprendre comment les participants abordent
                      les problèmes pour concevoir des indices efficaces. Enfin, la dimension communautaire de la
                      cybersécurité, avec des experts toujours prêts à partager leurs connaissances.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Apprentissages les plus marquants</h4>
                    <p className="text-slate-600">
                      Au-delà des compétences techniques, j'ai appris l'importance de la documentation et de la
                      transmission de connaissances. Chaque challenge créé doit être accompagné d'explications
                      pédagogiques détaillées. J'ai aussi découvert que la cybersécurité n'est pas qu'une question
                      technique, mais implique une réflexion sur l'éthique, la responsabilité et l'impact sociétal de
                      nos actions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-cyan-700">Progression Professionnelle Constatée</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-700">Compétences Techniques Acquises (Hard Skills)</h4>
                    <p className="text-slate-600">
                      • <strong>Cryptographie appliquée :</strong> Maîtrise des algorithmes RSA, AES, et techniques de
                      cryptanalyse
                      <br />• <strong>Sécurité web avancée :</strong> Exploitation de vulnérabilités complexes (XXE,
                      SSRF, Deserialization)
                      <br />• <strong>Reverse Engineering :</strong> Analyse de binaires avec Ghidra, décompilation et
                      analyse statique
                      <br />• <strong>Forensics numérique :</strong> Analyse de dumps mémoire, récupération de données
                      supprimées
                      <br />• <strong>Scripting avancé :</strong> Automatisation de tâches avec Python, développement
                      d'exploits
                      <br />• <strong>Infrastructure sécurisée :</strong> Déploiement Docker, isolation des
                      environnements de test
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700">Compétences Comportementales (Soft Skills)</h4>
                    <p className="text-slate-600">
                      • <strong>Pédagogie :</strong> Capacité à expliquer des concepts complexes de manière accessible
                      <br />• <strong>Gestion du stress :</strong> Respect des deadlines sous pression, gestion des
                      imprévus techniques
                      <br />• <strong>Travail collaboratif :</strong> Intégration efficace dans une équipe technique
                      multidisciplinaire
                      <br />• <strong>Communication technique :</strong> Rédaction de documentation claire, présentation
                      de résultats
                      <br />• <strong>Résolution de problèmes :</strong> Approche méthodique face aux bugs et défis
                      techniques
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-700">Difficulté Majeure Rencontrée et Surmontée</CardTitle>
                <CardDescription>Analyse détaillée d'un défi professionnel significatif</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-700">Description Précise de la Difficulté</h4>
                    <p className="text-slate-600">
                      <strong>Contexte :</strong> Lors de la création d'un défi de cryptographie avancée, j'ai rencontré
                      un problème majeur : le challenge était soit trop facile (résolu en 5 minutes), soit impossible
                      (aucune solution trouvée après plusieurs heures de test). Malgré ca je n'arrivais pas à trouver le
                      bon équilibre de difficulté.
                      <br />
                      <br />
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-700">Stratégies et Actions Mises en Place</h4>
                    <p className="text-slate-600">
                      <strong>1. Analyse méthodique :</strong> J'ai déconstruit le problème en identifiant précisément
                      les étapes qui posaient problème aux testeurs.
                      <br />
                      <strong>2. Recherche collaborative :</strong> J'ai sollicité l'aide de mon tuteur et organisé des
                      sessions de brainstorming avec l'équipe.
                      <br />
                      <strong>3. Solution innovante :</strong> Création d'un système de hints progressifs qui s'adaptent
                      au temps passé sur le challenge, permettant de maintenir la difficulté tout en évitant la
                      frustration.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-700">Ce que cette Expérience a Révélé de Moi</h4>
                    <p className="text-slate-600">
                      <strong>Forces identifiées :</strong>
                      <br />• <strong>Persévérance :</strong> Capacité à ne pas abandonner face à un problème complexe
                      <br />• <strong>Humilité :</strong> Acceptation de demander de l'aide quand nécessaire
                      <br />• <strong>Adaptabilité :</strong> Remise en question de mon approche initiale pour trouver
                      une solution créative
                      <br />• <strong>Méthodologie :</strong> Approche structurée pour résoudre un problème complexe
                      <br />
                      <br />
                      <strong>Faiblesses révélées :</strong>
                      <br />• <strong>Communication :</strong> J'ai tardé à communiquer mes difficultés, ce qui a
                      retardé l'aide
                      <br />
                      <br />
                      <strong>Apprentissage personnel :</strong> Cette expérience m'a appris l'importance du feedback
                      utilisateur et de l'itération rapide. Elle a renforcé ma confiance en ma capacité à surmonter les
                      obstacles techniques complexes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 5. Conclusion et impact */}
        <section id="impact">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <Shield className="h-8 w-8 text-cyan-600" />
            Impact sur Mon Projet Professionnel
          </h2>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-700">Et Maintenant ? - Vision d'Avenir</CardTitle>
              <CardDescription>L'influence transformatrice de ce stage sur mon parcours professionnel</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-700">Impact Concret sur Mon Projet Professionnel</h4>
                  <p className="text-slate-600">
                    Ce stage en cybersécurité était pour moi une <strong>exploration volontaire</strong> pour découvrir
                    ce domaine et comprendre ses enjeux. Cette expérience m'a permis de toucher concrètement au monde de
                    la cybersécurité et d'acquérir des compétences techniques solides. Cependant, cette immersion m'a
                    également confirmé que ma véritable passion se situe dans le <strong>développement web</strong>.
                    <br />
                    <br />
                    Bien que j'aie apprécié les aspects techniques de la cybersécurité, je me dirige maintenant vers une
                    spécialisation en <strong>développement web full-stack</strong>. Les compétences acquises en
                    sécurité web, cryptographie et infrastructure ne sont pas perdues : elles constituent un atout
                    majeur pour créer des applications web sécurisées et robustes.
                    <br />
                    <br />
                    Mon projet professionnel s'oriente désormais vers le{" "}
                    <strong>développement d'applications web modernes</strong>, avec une expertise particulière en
                    sécurité applicative. Je souhaite devenir <strong>développeur web senior</strong> avec une
                    spécialisation en sécurité, un profil rare et recherché sur le marché.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700">Utilité Immédiate pour la Suite de mes Études</h4>
                  <p className="text-slate-600">
                    <strong>Compétences techniques transférables :</strong> Les connaissances acquises en sécurité web
                    (XSS, SQL injection, CSRF) me donnent une longueur d'avance pour développer des applications
                    sécurisées. La maîtrise de Docker, Linux et des outils de développement me sera directement utile en
                    développement web.
                    <br />
                    <br />
                    <strong>Vision sécuritaire du développement :</strong> Cette expérience me permet d'aborder le
                    développement web avec une mentalité "security by design", un avantage considérable dans un contexte
                    où la sécurité des applications est cruciale.
                    <br />
                    <br />
                    <strong>Portfolio technique diversifié :</strong> Les projets réalisés démontrent ma capacité à
                    comprendre les enjeux de sécurité, un atout précieux pour mes candidatures en développement web,
                    notamment pour des postes nécessitant une expertise en sécurité applicative.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700">Perspectives d'Évolution à Court et Moyen Terme</h4>
                  <p className="text-slate-600">
                    <strong>Court terme (6-12 mois) :</strong>
                    <br />• Approfondissement des technologies web modernes (React, Node.js, TypeScript)
                    <br />• Développement de projets web intégrant les bonnes pratiques de sécurité
                    <br />• Obtention de certifications en développement web (AWS, Google Cloud)
                    <br />• Création d'un portfolio de développement web avec focus sécurité
                    <br />
                    <br />
                    <strong>Moyen terme (1-3 ans) :</strong>
                    <br />• Stage de fin d'études dans une entreprise tech spécialisée en développement web
                    <br />• Spécialisation en <strong>DevSecOps</strong> - fusion entre développement, sécurité et
                    opérations
                    <br />• Développement d'expertise en <strong>architectures cloud sécurisées</strong>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700">Valeur Ajoutée de cette Expérience Cybersécurité</h4>
                  <p className="text-slate-600">
                    Cette exploration de la cybersécurité n'était pas un détour, mais un{" "}
                    <strong>investissement stratégique</strong>. Dans un monde où les cyberattaques se multiplient, être
                    un développeur web qui comprend intimement les enjeux de sécurité représente une valeur ajoutée
                    énorme. Je peux désormais :
                    <br />• Anticiper les vulnérabilités dès la conception
                    <br />• Communiquer efficacement avec les équipes sécurité
                    <br />• Développer des applications naturellement résistantes aux attaques
                    <br />• Me positionner sur des projets à forts enjeux sécuritaires
                    <br />
                    <br />
                    Cette double compétence développement/sécurité fait de moi un profil unique et recherché sur le
                    marché du travail.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="h-6 w-6 text-cyan-400" />
            <span className="text-lg font-semibold">Portfolio de Stage - Laucournet Thomas</span>
          </div>
          <p className="text-slate-400">Rapport d'activité professionnelle - Bachelor 2 Cybersécurité</p>
          <p className="text-slate-500 text-sm mt-2">Ynov Campus - Rendu le 25 août 2025</p>
          <div className="mt-4 pt-4 border-t border-slate-700"></div>
        </div>
      </footer>
    </div>
  )
}

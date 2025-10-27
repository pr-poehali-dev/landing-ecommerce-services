import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const Index = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const heroImages = [
    {
      url: "https://cdn.poehali.dev/projects/5829d144-7aac-40bc-98fe-3b53ef4ba154/files/e3fa3f21-4662-4bab-bf42-c20fd292548b.jpg",
      title: "Современные технологии"
    },
    {
      url: "https://cdn.poehali.dev/projects/5829d144-7aac-40bc-98fe-3b53ef4ba154/files/2978f16f-0832-451b-b4f4-d54fc06652ea.jpg",
      title: "E-commerce решения"
    },
    {
      url: "https://cdn.poehali.dev/projects/5829d144-7aac-40bc-98fe-3b53ef4ba154/files/6d44212a-9fd4-4f4e-b273-19d3e22c4207.jpg",
      title: "Маркетплейс платформы"
    }
  ];
  const services = [
    {
      icon: "Monitor",
      title: "Корпоративные сайты",
      description: "Профессиональные веб-сайты для вашего бизнеса с современным дизайном и адаптивной версткой"
    },
    {
      icon: "ShoppingCart",
      title: "Интернет-магазины",
      description: "Полнофункциональные платформы электронной коммерции с системой оплаты и управления товарами"
    },
    {
      icon: "Store",
      title: "Маркетплейсы",
      description: "Масштабируемые торговые площадки для множества продавцов с продвинутой логистикой"
    }
  ];

  const advantages = [
    {
      icon: "Zap",
      title: "Быстрая разработка",
      description: "Сдаем проекты в срок благодаря отлаженным процессам и опытной команде"
    },
    {
      icon: "Shield",
      title: "Надежность",
      description: "Используем проверенные технологии и современные стандарты безопасности"
    },
    {
      icon: "LineChart",
      title: "Масштабируемость",
      description: "Создаем решения, которые растут вместе с вашим бизнесом"
    },
    {
      icon: "Users",
      title: "Поддержка 24/7",
      description: "Всегда на связи для решения любых технических вопросов"
    }
  ];

  const portfolio = [
    {
      title: "E-Commerce платформа",
      category: "Интернет-магазин",
      description: "Крупный интернет-магазин электроники с каталогом 50,000+ товаров",
      stats: "300% рост конверсии"
    },
    {
      title: "B2B маркетплейс",
      category: "Маркетплейс",
      description: "Оптовая торговая площадка с системой тендеров и логистикой",
      stats: "1000+ активных продавцов"
    },
    {
      title: "Корпоративный портал",
      category: "Корпоративный сайт",
      description: "Многостраничный сайт производственной компании",
      stats: "500% рост трафика"
    }
  ];

  const partners = [
    { name: "Сбербанк" },
    { name: "Яндекс" },
    { name: "МТС" },
    { name: "ВТБ" },
    { name: "Газпром" },
    { name: "Ростелеком" },
    { name: "Лукойл" },
    { name: "Почта России" }
  ];

  const pricingPlans = [
    {
      name: "Стартовый",
      price: "от 150 000 ₽",
      description: "Идеально для малого бизнеса",
      features: [
        "Корпоративный сайт до 10 страниц",
        "Адаптивный дизайн",
        "Базовая SEO-оптимизация",
        "Форма обратной связи",
        "1 месяц технической поддержки",
        "Установка на хостинг"
      ],
      popular: false
    },
    {
      name: "Бизнес",
      price: "от 300 000 ₽",
      description: "Для растущих компаний",
      features: [
        "Интернет-магазин до 500 товаров",
        "Система управления каталогом",
        "Интеграция с платежными системами",
        "Личный кабинет пользователя",
        "Продвинутая SEO-оптимизация",
        "3 месяца технической поддержки",
        "Обучение администратора"
      ],
      popular: true
    },
    {
      name: "Энтерпрайз",
      price: "от 800 000 ₽",
      description: "Для крупного бизнеса",
      features: [
        "Маркетплейс с неограниченным функционалом",
        "Мультивендорная система",
        "Интеграция с 1С, CRM, ERP",
        "Сложная логистика и аналитика",
        "Высоконагруженная архитектура",
        "12 месяцев поддержки 24/7",
        "Выделенный менеджер проекта"
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      question: "Сколько времени занимает разработка сайта?",
      answer: "Срок разработки зависит от сложности проекта. Простой корпоративный сайт — 2-3 недели, интернет-магазин — 1-2 месяца, маркетплейс — от 3 месяцев. Точные сроки обсуждаются индивидуально."
    },
    {
      question: "Какова стоимость разработки?",
      answer: "Стоимость формируется на основе технического задания. Корпоративный сайт — от 150 000 ₽, интернет-магазин — от 300 000 ₽, маркетплейс — от 800 000 ₽. Первая консультация и оценка проекта — бесплатно."
    },
    {
      question: "Предоставляете ли вы техническую поддержку?",
      answer: "Да, мы предлагаем полное сопровождение после запуска: обновления, исправление ошибок, консультации. Доступны различные тарифы поддержки — от базового до premium с круглосуточным доступом."
    },
    {
      question: "Можно ли внести изменения в процессе разработки?",
      answer: "Конечно! Мы работаем по agile-методологии с еженедельными демонстрациями результатов. Вы можете вносить правки на каждом этапе. Серьезные изменения в функционале могут повлиять на сроки и бюджет."
    },
    {
      question: "Будет ли сайт адаптирован под мобильные устройства?",
      answer: "Абсолютно все наши проекты разрабатываются с адаптивным дизайном (responsive design). Сайт будет корректно отображаться на смартфонах, планшетах и десктопах любых размеров."
    },
    {
      question: "Помогаете ли с продвижением сайта?",
      answer: "Да, мы предлагаем базовую SEO-оптимизацию при разработке: правильная структура, метатеги, скорость загрузки. Также сотрудничаем с digital-агентствами для комплексного продвижения сайта."
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Code2" className="text-primary" size={28} />
              <span className="text-xl font-bold">WebDev Agency</span>
            </div>
            <div className="hidden md:flex gap-8 items-center">
              <a href="#services" className="text-gray-900 hover:text-primary transition-colors font-semibold">Услуги</a>
              <a href="#advantages" className="text-gray-900 hover:text-primary transition-colors font-semibold">Преимущества</a>
              <a href="#portfolio" className="text-gray-900 hover:text-primary transition-colors font-semibold">Портфолио</a>
              <a href="#faq" className="text-gray-900 hover:text-primary transition-colors font-semibold">FAQ</a>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="sm" 
                className="gap-2 text-gray-900 hover:text-primary"
                asChild
              >
                <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={18} />
                  <span className="hidden sm:inline font-semibold">Telegram</span>
                </a>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2 text-gray-900 hover:text-primary font-semibold">
                    <Icon name="Globe" size={18} />
                    <span className="hidden sm:inline">RU</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="gap-2 text-gray-900 font-semibold">
                    <span className="text-lg">🇷🇺</span>
                    Русский
                  </DropdownMenuItem>
                  <DropdownMenuItem className="gap-2 text-gray-900 font-semibold">
                    <span className="text-lg">🇬🇧</span>
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem className="gap-2 text-gray-900 font-semibold">
                    <span className="text-lg">🇨🇳</span>
                    中文
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button>Оставить заявку</Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                Создаем веб-решения<br />для вашего бизнеса
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Разрабатываем современные сайты, интернет-магазины и маркетплейсы с гарантией качества
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Начать проект
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Смотреть работы
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <Carousel
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={() => plugin.current.stop()}
                onMouseLeave={() => plugin.current.play()}
              >
                <CarouselContent>
                  {heroImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                        <img
                          src={image.url}
                          alt={image.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                          <p className="text-white text-xl font-semibold">{image.title}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-gray-600 text-lg">Полный спектр решений для цифровой трансформации бизнеса</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in border-gray-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon name={service.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши преимущества</h2>
            <p className="text-gray-600 text-lg">Почему клиенты выбирают нас</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Icon name={advantage.icon as any} className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">{advantage.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Портфолио работ</h2>
            <p className="text-gray-600 text-lg">Проекты, которыми мы гордимся</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolio.map((project, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-white/90 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-primary font-semibold text-sm">{project.stats}</span>
                    <Icon name="ArrowUpRight" className="text-gray-400 group-hover:text-primary transition-colors" size={20} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Нам доверяют</h2>
            <p className="text-gray-600">Крупнейшие компании России выбирают нас</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto items-center">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <Icon name="Building2" className="text-gray-400" size={32} />
                  </div>
                  <span className="text-lg font-semibold text-gray-700">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Тарифы и цены</h2>
            <p className="text-gray-600 text-lg">Выберите оптимальный план для вашего бизнеса</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative hover:shadow-2xl transition-all duration-300 animate-scale-in ${
                  plan.popular ? 'border-2 border-primary shadow-xl scale-105' : 'border-gray-200'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Популярный
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    {plan.popular ? 'Начать проект' : 'Узнать подробнее'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-gray-600 text-lg">Ответы на популярные вопросы клиентов</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-lg border border-gray-200 px-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="text-lg font-semibold pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-secondary to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Готовы начать проект?</h2>
            <p className="text-xl mb-8 text-white/90">
              Свяжитесь с нами для обсуждения вашей идеи. Первая консультация — бесплатно
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Icon name="MessageSquare" className="mr-2" size={20} />
                Написать нам
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <Icon name="Phone" className="mr-2" size={20} />
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Code2" className="text-primary" size={24} />
                <span className="text-white font-bold">WebDev Agency</span>
              </div>
              <p className="text-sm">Профессиональная веб-разработка для вашего бизнеса</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm">
                <li>Корпоративные сайты</li>
                <li>Интернет-магазины</li>
                <li>Маркетплейсы</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm">
                <li>info@webdev.ru</li>
                <li>+7 (999) 123-45-67</li>
                <li>Москва, Россия</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            © 2024 WebDev Agency. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
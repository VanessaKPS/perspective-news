const sampleData = [
    {
        author: 'Alice Grahns',
        category: 'general',
        country: 'gb',
        description:
            'WHEN first-time buyers Leanne Holder and Jacob Leaver, both 27, lost their jobs on the same day around Easter three years ago, their dreams of owning a home almost disappeared. They’d been head-hunted for their roles training athletes &#8211; but suddenly the contracts were pulled when the business ran out of cash. Without any savings [&#8230;]',
        image: null,
        language: 'en',
        published_at: '2020-10-08T10:48:40+00:00',
        source: 'thesun',
        title:
            'Starting our own cleaning product subscription business helped us buy £180,000 three-bed first home',
        url:
            'https://www.thesun.co.uk/money/12776868/first-time-buyer-started-business-lost-jobs/',
    },
    {
        author: 'Louise Hall',
        category: 'general',
        country: 'gb',
        description:
            'Executive vice president previously attempted to delay interview until after election',
        image: 'https://static.independent.co.uk/2020/10/06/19/newFile-1.jpgll',
        language: 'en',
        published_at: '2020-10-06T19:15:43+00:00',
        source: 'The Independent',
        title:
            'President’s son attacks NYC after he is questioned under oath in investigation of family business',
        url:
            'https://www.independent.co.uk/news/world/americas/us-politics/eric-trump-questioned-organisation-letitia-james-new-york-michael-cohen-b840559.html',
    },
    {
        author: 'Sean Gallen',
        category: 'general',
        country: 'gb',
        description:
            'PROSECUTORS let two Extinction Rebellion protesters off with a slap on the wrist — despite a print blockade costing millions. Will Farbrother, 39, and project manager Eleanor McAree, 26, were said earn a total of £80,000 but CPS lawyers chose not to pursue them for compo. Their protest cost small businesses, supermarkets and the printing [&#8230;]',
        image: null,
        language: 'en',
        published_at: '2020-10-05T21:44:48+00:00',
        source: 'thesun',
        title:
            'Extinction Rebellion protesters whose print blockade cost millions let off with slap on the wrist',
        url:
            'https://www.thesun.co.uk/news/12854649/extinction-rebellion-protesters-print-blockade/',
    },
    {
        author: 'James Orr',
        category: 'general',
        country: 'gb',
        description:
            'ARSENAL have finally signed Thomas Partey in a £45million deal from Atletico Madrid on Deadline Day. But the Spanish side are reportedly so angry at the Ghanaian for failing to notify them that his release clause had been met that they may never do business with Arsenal again. Follow ALL of the Gunners latest transfer [&#8230;]',
        image: null,
        language: 'en',
        published_at: '2020-10-06T07:27:41+00:00',
        source: 'thesun',
        title:
            '8.30am Arsenal transfer news LIVE: Partey shows Atletico ‘incredible disrespect’, Torreira joins Atleti, Aouar stays put',
        url:
            'https://www.thesun.co.uk/sport/football/12753883/arsenal-transfer-news-live-partey-torreira-aouar-guendouzi/',
    },
    {
        author: 'James Orr',
        category: 'general',
        country: 'gb',
        description:
            'ARSENAL have finally signed Thomas Partey in a £45million deal from Atletico Madrid on Deadline Day. But the Spanish side are reportedly so angry at the Ghanaian for failing to notify them that his release clause had been met that they may never do business with Arsenal again. Follow ALL of the Gunners latest transfer [&#8230;]',
        image: null,
        language: 'en',
        published_at: '2020-10-06T07:59:54+00:00',
        source: 'thesun',
        title:
            '9am Arsenal transfer news LIVE: Partey shows Atletico ‘incredible disrespect’, Torreira joins Atleti, Aouar stays put',
        url:
            'https://www.thesun.co.uk/sport/football/12753883/arsenal-transfer-news-live-partey-torreira-aouar-guendouzi/',
    },
    {
        author: 'Business Matters',
        category: 'business',
        country: 'gb',
        description:
            'New research has revealed that one in five UK SME owners are working an additional three hours daily on average to manage the impact of the Covid-19 pandemic on their business.↵Read more: ↵One in five SME owners work an extra three hours every day due to the pandemic',
        image: null,
        language: 'en',
        published_at: '2020-10-07T08:46:36+00:00',
        source: "Business Matters | The Uk's Leading Sme Business Magazine",
        title:
            'One in five SME owners work an extra three hours every day due to the pandemic',
        url:
            'https://www.bmmagazine.co.uk/news/one-in-five-sme-owners-work-an-extra-three-hours-every-day-due-to-the-pandemic/',
    },
    {
        author: 'Richard Wheatstone',
        category: 'general',
        country: 'gb',
        description:
            'POLICE are investigating after a dad was filmed driving along a busy road with his baby sat casually on his LAP. The shocking footage shows the man as he turns right across a busy road close to a McDonald&#8217;s in Banbury, Oxfordshire. As he turns across the flow of traffic the dashcam footage shows he [&#8230;]',
        image: null,
        language: 'en',
        published_at: '2020-10-07T15:34:32+00:00',
        source: 'thesun',
        title:
            'Cops hunt ‘stupid’ dad filmed driving with baby on his lap along busy road in front of truck',
        url:
            'https://www.thesun.co.uk/news/12870944/driver-filmed-baby-lap-oxfordshire/',
    },
    {
        author: 'Cherry Martin',
        category: 'business',
        country: 'gb',
        description:
            'For people running businesses from home offices what is the reality of UV-C light as a Covid deterrent? Could it be a solution for the millions of UK SME&#8217;s? With Covid lockdowns and precautions set to last at least another six months, UK businesses are having to get used to operating in a restricted and [&#8230;]↵Read more: ↵Can UV light protect your home office and business from covid?',
        image: null,
        language: 'en',
        published_at: '2020-10-06T12:41:50+00:00',
        source: "Business Matters | The Uk's Leading Sme Business Magazine",
        title: 'Can UV light protect your home office and business from covid?',
        url:
            'https://www.bmmagazine.co.uk/in-business/health-and-wellbeing/can-uv-light-protect-your-home-office-and-business-from-covid/',
    },
    {
        author: 'Holly Christodoulou',
        category: 'general',
        country: 'gb',
        description:
            'THIS is the heart-stopping moment a mum was dragged from her motor by carjackers who then sped off &#8211; with her three kids in the back. Shocking footage shows the two robbers pounce on the woman in broad daylight as she sat in her car on a busy road with her daughters, aged four, five [&#8230;]',
        image: null,
        language: 'en',
        published_at: '2020-10-06T13:05:41+00:00',
        source: 'thesun',
        title:
            'Terrifying moment carjackers drag mum from car before speeding off with her three daughters, aged 4, 5 and 7, in back',
        url:
            'https://www.thesun.co.uk/news/uknews/12859723/car-jacking-leeds-woman-kids-video/',
    },
    {
        author:
            'Jessica Murray (now); Kevin Rawlinson, Martin Farrer and Helen Sullivan (earlier)',
        category: 'science',
        country: 'gb',
        description:
            'WHO to look at China’s vaccines; Japan and South Korea to resume business travelContagious Trump removes mask for photos upon return from hospitalIrish government rejects return to full coronavirus lockdownTrump coronavirus updates – liveUK coronavirus updates – live 12.15pm BST Iran has registered a record 4,151 new coronavirus cases in the past 24 hours, with the total number of identified cases in the worst-hit country in the Middle East rising to 479,825, the health ministry reported on Tuesday.Ministry spokeswoman Sima Sadat Lari told state television that 227 patients had died in the past 24 hours, bringing the total of fatalities to 27,419.  12.12pm BST The threat of the coronavirus in Russia has not gone away, but the country is ready for any development, the RIA news agency cited president Vladimir Putin as saying during a meeting with parliamentary leaders on Tuesday.Daily new cases of the coronavirus in Russia surged past 11,000 on Tuesday, the highest jump since 11 May. Continue reading...',
        image:
            'https://i.guim.co.uk/img/media/f56d4c87b84dfbb964c0e57b390e66363b4a1f84/0_259_9504_5702/master/9504.jpg?width=140&quality=85&auto=format&fit=max&s=dbe7b8b5a4ab2c533d6fa8de1cf47b18',
        language: 'en',
        published_at: '2020-10-06T11:15:40+00:00',
        source: 'The Guardian',
        title:
            'Coronavirus live news: Chinese vaccines to be assessed; Japan-South Korea travel plan revealed',
        url:
            'https://www.theguardian.com/world/live/2020/oct/06/coronavirus-live-news-french-icu-patients-highest-since-may-trump-to-participate-in-next-debate',
    },
    {
        author: 'Business Matters',
        category: 'business',
        country: 'gb',
        description:
            'Design thinking is at the heart of every business, including Apple, who have enjoyed enormous success.↵Read more: ↵What’s the secret behind Apple’s success?',
        image: null,
        language: 'en',
        published_at: '2020-10-13T14:28:04+00:00',
        source: "Business Matters | The Uk's Leading Sme Business Magazine",
        title: 'What’s the secret behind Apple’s success?',
        url:
            'https://www.bmmagazine.co.uk/in-business/advice/whats-the-secret-behind-apples-success/',
    },
    {
        author: 'Andrew Sparrow',
        category: 'general',
        country: 'gb',
        description:
            "PM makes statement on Brexit, telling UK to prepare for no deal with EUMerkel urges Johnson not to abandon Brexit negotiationsNo 10 startled by EU insistence that UK accept trade termsCoronavirus: tier 3 strategy reluctantly accepted in Lancashire 12.00pm BST Boris Johnson has recorded a clip for broadcasters on the UK-EU trade talks. Itt is due to be broadcast shortly, but Sky’s Sam Coates has got the line.BREAKING: Boris Johnson says the UK must prepared for no trade deal with the EU from Jan 1Says EU not willing to give UK a Canada style dealIf the EU comes back with a fundamental change of opinion then the UK will listen. But says that doesn't sound likely after the summit 11.58am BST The DHSC news release also confirms that, in return for going into tier 3, Lancashire is to get a financial package worth £12m initially - with an unspecified amount coming later. It says:To support the local authority during this period, the government will be providing a support package worth £12m. The government will also establish a dedicated, ministerial-led taskforce with additional funding to work with Lancashire leaders to support local businesses to recover over the coming six months.  Continue reading...",
        image:
            'https://i.guim.co.uk/img/media/b3e6dad7a09c9e4d110c1acebb90f7ed5e2374ae/0_154_4007_2404/master/4007.jpg?width=140&quality=85&auto=format&fit=max&s=30e5043932917424d2a42de3b86bba38',
        language: 'en',
        published_at: '2020-10-16T11:02:38+00:00',
        source: 'The Guardian',
        title:
            'Boris Johnson says UK must prepare for no deal with EU – UK politics live',
        url:
            'https://www.theguardian.com/politics/live/2020/oct/16/uk-coronavirus-live-boris-johnson-local-restrictions-lockdown-tier-2-covid-brexit-latest-updates',
    },
    {
        author: 'Niamh Cavanagh',
        category: 'general',
        country: 'gb',
        description:
            'BORIS Johnson has warned businesses to &#8220;prepare for a no deal&#8221; as the EU is told to dramatically shift position if it wants to resume talks. Mr Johnson and Michael Gove will use a conference call on Tuesday to tell business leaders they should be ready for major change regardless of whether there is a [&#8230;]',
        image: null,
        language: 'en',
        published_at: '2020-10-20T06:03:58+00:00',
        source: 'thesun',
        title:
            'Brexit news live – EU must shift position if it wants to resume talks as Boris to warn businesses ‘prepare for no deal’',
        url:
            'https://www.thesun.co.uk/news/12963065/brexit-news-latest-eu-uk-deal-deadline-barnier-live/',
    },
    {
        author:
            'Damien Gayle (now); Jessica Murray, Alexandra Topping, Ben Doherty and Martin Farrer (earlier)',
        category: 'general',
        country: 'gb',
        description:
            "Russia sees 14,231 cases in 24 hours, up from a record of 13,868 on Tuesday; Germany reports over 5,000 new infections for first time since April; Emmanuel Macron to announce new measures in FranceStudents to replace older teachers in Moscow amid record infectionsUS: Dustin Johnson, world’s No 1 golfer, tests positiveTest and trace: which countries got it right?England: Keir Starmer urges PM to impose ‘circuit breaker’ lockdownUK coronavirus – live updates 4.05pm BST Tough measures are to be introduced in Portugal from Thursday and plans are afoot to make mask wearing and use of a contact tracing app compulsory for some people, as the country a new record in cases. On Wednesday afternoon, Portugal’s health authorities reported 2,027 new cases of coronavirus infection, shattering a previous record of 1,646 recorded last Saturday. Seven new coronavirus-related deaths were reported. BREAKING: #Portugal orders new restrictions as #coronavirus cases rise:⚠️Mandatory use of masks in public⚠️Public gatherings limited to 5 pplFamily gatherings (weddings) limited to 50 pplFines up to 10,000€ for businesses not following rules pic.twitter.com/8sa9WWZS9FPortuguese PM @antoniocostapm:'We know there's fatigue regarding the limitations imposed in our lives. Let's beat that fatigue to win this marathon. The regulation of our own conscience is needed to prevent and control the evolution of this pandemic.' https://t.co/uTn89D4CAE 3.43pm BST YouTube has announced it is to remove videos making claims about Covid-19 vaccines that “contradict expert consensus from local health authorities or the World Health Organization.”The video sharing site, which is owned by Alphabet, the US tech conglomerate that also owns the Google search engine, said on Wednesday it was expanding its “Covid-19 medical misinformation policy.”A Covid-19 vaccine may be imminent, therefore we’re ensuring we have the right policies in place to be able to remove misinformation related to a Covid-19 vaccine from the platform.The expanded Covid-19 Medical Misinformation policy will include specific information stating that any content that includes claims about Covid-19 vaccinations that contradict expert consensus from local health authorities or the World Health Organization (WHO) will be removed from YouTube. Continue reading...",
        image:
            'https://i.guim.co.uk/img/media/6671a04bfee8a4dc13afd8ce5c66aa945a20efd6/0_99_3000_1800/master/3000.jpg?width=140&quality=85&auto=format&fit=max&s=f19f8c0fc278f48508298acc1317865f',
        language: 'en',
        published_at: '2020-10-14T15:05:39+00:00',
        source: 'The Guardian',
        title:
            'Coronavirus live news: record new cases in Russia for second day in a row; over 5,000 daily infections in Germany',
        url:
            'https://www.theguardian.com/world/live/2020/oct/14/coronavirus-live-news-restrictions-tighten-across-europe-global-cases-near-38m',
    },
    {
        author: 'Alice Grahns',
        category: 'general',
        country: 'gb',
        description:
            'WHEN first-time buyers Leanne Holder and Jacob Leaver, both 27, lost their jobs on the same day around Easter three years ago, their dreams of owning a home almost disappeared. They’d been head-hunted for their roles training athletes &#8211; but suddenly the contracts were pulled when the business ran out of cash. Without any savings [&#8230;]',
        image: null,
        language: 'en',
        published_at: '2020-10-08T10:48:40+00:00',
        source: 'thesun',
        title:
            'Starting our own cleaning product subscription business helped us buy £180,000 three-bed first home',
        url:
            'https://www.thesun.co.uk/money/12776868/first-time-buyer-started-business-lost-jobs/',
    },
    {
        author: 'Louise Hall',
        category: 'general',
        country: 'gb',
        description:
            'Executive vice president previously attempted to delay interview until after election',
        image: 'https://static.independent.co.uk/2020/10/06/19/newFile-1.jpg',
        language: 'en',
        published_at: '2020-10-06T19:15:43+00:00',
        source: 'The Independent',
        title:
            'President’s son attacks NYC after he is questioned under oath in investigation of family business',
        url:
            'https://www.independent.co.uk/news/world/americas/us-politics/eric-trump-questioned-organisation-letitia-james-new-york-michael-cohen-b840559.html',
    },
    {
        author: 'Sean Gallen',
        category: 'general',
        country: 'gb',
        description:
            'PROSECUTORS let two Extinction Rebellion protesters off with a slap on the wrist — despite a print blockade costing millions. Will Farbrother, 39, and project manager Eleanor McAree, 26, were said earn a total of £80,000 but CPS lawyers chose not to pursue them for compo. Their protest cost small businesses, supermarkets and the printing [&#8230;]',
        image: null,
        language: 'en',
        published_at: '2020-10-05T21:44:48+00:00',
        source: 'thesun',
        title:
            'Extinction Rebellion protesters whose print blockade cost millions let off with slap on the wrist',
        url:
            'https://www.thesun.co.uk/news/12854649/extinction-rebellion-protesters-print-blockade/',
    },
    {
        author: 'James Orr',
        category: 'general',
        country: 'gb',
        description:
            'ARSENAL have finally signed Thomas Partey in a £45million deal from Atletico Madrid on Deadline Day. But the Spanish side are reportedly so angry at the Ghanaian for failing to notify them that his release clause had been met that they may never do business with Arsenal again. Follow ALL of the Gunners latest transfer [&#8230;]',
        image: null,
        language: 'en',
        published_at: '2020-10-06T07:27:41+00:00',
        source: 'thesun',
        title:
            '8.30am Arsenal transfer news LIVE: Partey shows Atletico ‘incredible disrespect’, Torreira joins Atleti, Aouar stays put',
        url:
            'https://www.thesun.co.uk/sport/football/12753883/arsenal-transfer-news-live-partey-torreira-aouar-guendouzi/',
    },
    {
        author: 'James Orr',
        category: 'general',
        country: 'gb',
        description:
            'ARSENAL have finally signed Thomas Partey in a £45million deal from Atletico Madrid on Deadline Day. But the Spanish side are reportedly so angry at the Ghanaian for failing to notify them that his release clause had been met that they may never do business with Arsenal again. Follow ALL of the Gunners latest transfer [&#8230;]',
        image: null,
        language: 'en',
        published_at: '2020-10-06T07:59:54+00:00',
        source: 'thesun',
        title:
            '9am Arsenal transfer news LIVE: Partey shows Atletico ‘incredible disrespect’, Torreira joins Atleti, Aouar stays put',
        url:
            'https://www.thesun.co.uk/sport/football/12753883/arsenal-transfer-news-live-partey-torreira-aouar-guendouzi/',
    },
    {
        author: 'Business Matters',
        category: 'business',
        country: 'gb',
        description:
            'New research has revealed that one in five UK SME owners are working an additional three hours daily on average to manage the impact of the Covid-19 pandemic on their business.↵Read more: ↵One in five SME owners work an extra three hours every day due to the pandemic',
        image: null,
        language: 'en',
        published_at: '2020-10-07T08:46:36+00:00',
        source: "Business Matters | The Uk's Leading Sme Business Magazine",
        title:
            'One in five SME owners work an extra three hours every day due to the pandemic',
        url:
            'https://www.bmmagazine.co.uk/news/one-in-five-sme-owners-work-an-extra-three-hours-every-day-due-to-the-pandemic/',
    },
    {
        author: 'Richard Wheatstone',
        category: 'general',
        country: 'gb',
        description:
            'POLICE are investigating after a dad was filmed driving along a busy road with his baby sat casually on his LAP. The shocking footage shows the man as he turns right across a busy road close to a McDonald&#8217;s in Banbury, Oxfordshire. As he turns across the flow of traffic the dashcam footage shows he [&#8230;]',
        image: null,
        language: 'en',
        published_at: '2020-10-07T15:34:32+00:00',
        source: 'thesun',
        title:
            'Cops hunt ‘stupid’ dad filmed driving with baby on his lap along busy road in front of truck',
        url:
            'https://www.thesun.co.uk/news/12870944/driver-filmed-baby-lap-oxfordshire/',
    },
    {
        author: 'Cherry Martin',
        category: 'business',
        country: 'gb',
        description:
            'For people running businesses from home offices what is the reality of UV-C light as a Covid deterrent? Could it be a solution for the millions of UK SME&#8217;s? With Covid lockdowns and precautions set to last at least another six months, UK businesses are having to get used to operating in a restricted and [&#8230;]↵Read more: ↵Can UV light protect your home office and business from covid?',
        image: null,
        language: 'en',
        published_at: '2020-10-06T12:41:50+00:00',
        source: "Business Matters | The Uk's Leading Sme Business Magazine",
        title: 'Can UV light protect your home office and business from covid?',
        url:
            'https://www.bmmagazine.co.uk/in-business/health-and-wellbeing/can-uv-light-protect-your-home-office-and-business-from-covid/',
    },
    {
        author: 'Holly Christodoulou',
        category: 'general',
        country: 'gb',
        description:
            'THIS is the heart-stopping moment a mum was dragged from her motor by carjackers who then sped off &#8211; with her three kids in the back. Shocking footage shows the two robbers pounce on the woman in broad daylight as she sat in her car on a busy road with her daughters, aged four, five [&#8230;]',
        image: null,
        language: 'en',
        published_at: '2020-10-06T13:05:41+00:00',
        source: 'thesun',
        title:
            'Terrifying moment carjackers drag mum from car before speeding off with her three daughters, aged 4, 5 and 7, in back',
        url:
            'https://www.thesun.co.uk/news/uknews/12859723/car-jacking-leeds-woman-kids-video/',
    },
    {
        author:
            'Jessica Murray (now); Kevin Rawlinson, Martin Farrer and Helen Sullivan (earlier)',
        category: 'science',
        country: 'gb',
        description:
            'WHO to look at China’s vaccines; Japan and South Korea to resume business travelContagious Trump removes mask for photos upon return from hospitalIrish government rejects return to full coronavirus lockdownTrump coronavirus updates – liveUK coronavirus updates – live 12.15pm BST Iran has registered a record 4,151 new coronavirus cases in the past 24 hours, with the total number of identified cases in the worst-hit country in the Middle East rising to 479,825, the health ministry reported on Tuesday.Ministry spokeswoman Sima Sadat Lari told state television that 227 patients had died in the past 24 hours, bringing the total of fatalities to 27,419.  12.12pm BST The threat of the coronavirus in Russia has not gone away, but the country is ready for any development, the RIA news agency cited president Vladimir Putin as saying during a meeting with parliamentary leaders on Tuesday.Daily new cases of the coronavirus in Russia surged past 11,000 on Tuesday, the highest jump since 11 May. Continue reading...',
        image:
            'https://i.guim.co.uk/img/media/f56d4c87b84dfbb964c0e57b390e66363b4a1f84/0_259_9504_5702/master/9504.jpg?width=140&quality=85&auto=format&fit=max&s=dbe7b8b5a4ab2c533d6fa8de1cf47b18',
        language: 'en',
        published_at: '2020-10-06T11:15:40+00:00',
        source: 'The Guardian',
        title:
            'Coronavirus live news: Chinese vaccines to be assessed; Japan-South Korea travel plan revealed',
        url:
            'https://www.theguardian.com/world/live/2020/oct/06/coronavirus-live-news-french-icu-patients-highest-since-may-trump-to-participate-in-next-debate',
    },
    {
        author: 'Business Matters',
        category: 'business',
        country: 'gb',
        description:
            'Design thinking is at the heart of every business, including Apple, who have enjoyed enormous success.↵Read more: ↵What’s the secret behind Apple’s success?',
        image: null,
        language: 'en',
        published_at: '2020-10-13T14:28:04+00:00',
        source: "Business Matters | The Uk's Leading Sme Business Magazine",
        title: 'What’s the secret behind Apple’s success?',
        url:
            'https://www.bmmagazine.co.uk/in-business/advice/whats-the-secret-behind-apples-success/',
    },
    {
        author: 'Andrew Sparrow',
        category: 'general',
        country: 'gb',
        description:
            "PM makes statement on Brexit, telling UK to prepare for no deal with EUMerkel urges Johnson not to abandon Brexit negotiationsNo 10 startled by EU insistence that UK accept trade termsCoronavirus: tier 3 strategy reluctantly accepted in Lancashire 12.00pm BST Boris Johnson has recorded a clip for broadcasters on the UK-EU trade talks. Itt is due to be broadcast shortly, but Sky’s Sam Coates has got the line.BREAKING: Boris Johnson says the UK must prepared for no trade deal with the EU from Jan 1Says EU not willing to give UK a Canada style dealIf the EU comes back with a fundamental change of opinion then the UK will listen. But says that doesn't sound likely after the summit 11.58am BST The DHSC news release also confirms that, in return for going into tier 3, Lancashire is to get a financial package worth £12m initially - with an unspecified amount coming later. It says:To support the local authority during this period, the government will be providing a support package worth £12m. The government will also establish a dedicated, ministerial-led taskforce with additional funding to work with Lancashire leaders to support local businesses to recover over the coming six months.  Continue reading...",
        image:
            'https://i.guim.co.uk/img/media/b3e6dad7a09c9e4d110c1acebb90f7ed5e2374ae/0_154_4007_2404/master/4007.jpg?width=140&quality=85&auto=format&fit=max&s=30e5043932917424d2a42de3b86bba38',
        language: 'en',
        published_at: '2020-10-16T11:02:38+00:00',
        source: 'The Guardian',
        title:
            'Boris Johnson says UK must prepare for no deal with EU – UK politics live',
        url:
            'https://www.theguardian.com/politics/live/2020/oct/16/uk-coronavirus-live-boris-johnson-local-restrictions-lockdown-tier-2-covid-brexit-latest-updates',
    },
    {
        author: 'Niamh Cavanagh',
        category: 'general',
        country: 'gb',
        description:
            'BORIS Johnson has warned businesses to &#8220;prepare for a no deal&#8221; as the EU is told to dramatically shift position if it wants to resume talks. Mr Johnson and Michael Gove will use a conference call on Tuesday to tell business leaders they should be ready for major change regardless of whether there is a [&#8230;]',
        image: null,
        language: 'en',
        published_at: '2020-10-20T06:03:58+00:00',
        source: 'thesun',
        title:
            'Brexit news live – EU must shift position if it wants to resume talks as Boris to warn businesses ‘prepare for no deal’',
        url:
            'https://www.thesun.co.uk/news/12963065/brexit-news-latest-eu-uk-deal-deadline-barnier-live/',
    },
    {
        author:
            'Damien Gayle (now); Jessica Murray, Alexandra Topping, Ben Doherty and Martin Farrer (earlier)',
        category: 'general',
        country: 'gb',
        description:
            "Russia sees 14,231 cases in 24 hours, up from a record of 13,868 on Tuesday; Germany reports over 5,000 new infections for first time since April; Emmanuel Macron to announce new measures in FranceStudents to replace older teachers in Moscow amid record infectionsUS: Dustin Johnson, world’s No 1 golfer, tests positiveTest and trace: which countries got it right?England: Keir Starmer urges PM to impose ‘circuit breaker’ lockdownUK coronavirus – live updates 4.05pm BST Tough measures are to be introduced in Portugal from Thursday and plans are afoot to make mask wearing and use of a contact tracing app compulsory for some people, as the country a new record in cases. On Wednesday afternoon, Portugal’s health authorities reported 2,027 new cases of coronavirus infection, shattering a previous record of 1,646 recorded last Saturday. Seven new coronavirus-related deaths were reported. BREAKING: #Portugal orders new restrictions as #coronavirus cases rise:⚠️Mandatory use of masks in public⚠️Public gatherings limited to 5 pplFamily gatherings (weddings) limited to 50 pplFines up to 10,000€ for businesses not following rules pic.twitter.com/8sa9WWZS9FPortuguese PM @antoniocostapm:'We know there's fatigue regarding the limitations imposed in our lives. Let's beat that fatigue to win this marathon. The regulation of our own conscience is needed to prevent and control the evolution of this pandemic.' https://t.co/uTn89D4CAE 3.43pm BST YouTube has announced it is to remove videos making claims about Covid-19 vaccines that “contradict expert consensus from local health authorities or the World Health Organization.”The video sharing site, which is owned by Alphabet, the US tech conglomerate that also owns the Google search engine, said on Wednesday it was expanding its “Covid-19 medical misinformation policy.”A Covid-19 vaccine may be imminent, therefore we’re ensuring we have the right policies in place to be able to remove misinformation related to a Covid-19 vaccine from the platform.The expanded Covid-19 Medical Misinformation policy will include specific information stating that any content that includes claims about Covid-19 vaccinations that contradict expert consensus from local health authorities or the World Health Organization (WHO) will be removed from YouTube. Continue reading...",
        image:
            'https://i.guim.co.uk/img/media/6671a04bfee8a4dc13afd8ce5c66aa945a20efd6/0_99_3000_1800/master/3000.jpg?width=140&quality=85&auto=format&fit=max&s=f19f8c0fc278f48508298acc1317865f',
        language: 'en',
        published_at: '2020-10-14T15:05:39+00:00',
        source: 'The Guardian',
        title:
            'Coronavirus live news: record new cases in Russia for second day in a row; over 5,000 daily infections in Germany',
        url:
            'https://www.theguardian.com/world/live/2020/oct/14/coronavirus-live-news-restrictions-tighten-across-europe-global-cases-near-38m',
    },
]

export default sampleData

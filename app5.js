document.documentElement.innerHTML =  `<html><head>
        <meta charset="utf-8">
        <title></title>
        <base href="https://games.deo.shopeemobile.com/shopee/shopee-blockgame-live-vn/">
        <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1,minimum-scale=1,maximum-scale=1,minimal-ui=true,viewport-fit=cover">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
        <meta name="format-detection" content="telephone=no">
        <meta name="renderer" content="webkit">
        <meta name="force-rendering" content="webkit">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="msapplication-tap-highlight" content="no">
        <meta name="full-screen" content="yes">
        <meta name="x5-fullscreen" content="true">
        <meta name="360-fullscreen" content="true">
        <link rel="dns-prefetch" href="https://games.deo.shopeemobile.com">
        <link rel="dns-prefetch" href="https://cf.shopee.vn">
        <link rel="dns-prefetch" href="https://c-api-bit.shopeemobile.com">
        <link rel="preconnect" href="https://games.deo.shopeemobile.com" crossorigin="">
        
        
        
        
        <meta name="x5-page-mode" content="app">
        <style>
            :root {
                --img-loading1: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAUCAMAAAAQlCuDAAAAaVBMVEVHcEzG/237+pT9+53H/WrA/2fW+m+1/137+pfW/4H++53o9njC/3r//6q//Fjj7E//6Wn74Efw5UrY8VX340vM91n+95Ls50z98oG0/1rO9VP/3Ub/9Yz+73ry7mn/4VP95lv/+p3/84mF+JabAAAADnRSTlMAWN9VrI/g3akDifcGBnu8lzQAAADeSURBVHherdCHkcMgAETRBWRlkZOyfP0XeciecQGCV8CfncXHxFr6foy2bMIPo95vf49t/k0Zvrreb3GXz+173Hzf4db7KOV15pAy+h4J87s8T7VmuHO7Z8BEU0utmVSq0QksynMt4JSRoT2utQR1HS3oYdci7EExFIopewwYhFZFYloMqE0oMs0GU6MyQheoWS1MBeLumso9LLUcwVinWki5DFaH1KpHgPBUEyHox0IQqcUJkhfnizEigzEL5y/culTjzi2POcdTq8MXaWaeY54bgp+RVM38WFOREbd/v6GIS7smiaoAAAAASUVORK5CYII=');
                --img-loading2: url('data:image/png;base64,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');
                --img-loading3: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAABMCAYAAADKpeMpAAAax0lEQVR42u2deZidRZ3vP1X1Luf0Snc6gSyErJDFCEIEYZBVeNwQBRf06gVHnXHXgRG30UHU68JcF8ANEUEFN5S56AAisswoi4AQzGJCAE0g+9LrWd63qn73j/ftTicEsnV3zonn9zz9dD/JOafrd/r7+dXyraqjRIRGNKIRex6qAU8jGrGP8KTvn7/nT1aQPV0A1aoUGujN/wFk8AdQinHAuWjmiecvCD9TsGVn6Kp9TCq4cknjL3uARfr++UP6Cq5Y8izZ2A/Mf5a+wiuXbKlleOYBbwZOBiYAGuhRiv8W4XsIS/MsFyrFD23i54gXlFYEof4LiveIcHcDnkbsLOwH5j+vvoIrlizNtfuc+gquWHJ3zcGjFB8Wx6VpYlttKogIIgodQBhoTKR7tVbvBv6f97Ko0u9mVSsp4gWtFWEcUGwONupAvUSEJxvwNGIHcEZMX8EVS56sGXiU4u1pxV1T6kmpVizeZ0M4pRRoITCasGhoagm7daCvK/WmHyoNpCCgNGBBlFBoCmluD94OXKu0bsDTiEFwRlRf0TeXXTuq8NjdhUcxw1bcg90by51pxaO1ApMnxuB3hWih2BwQFUJKvVWsFZQG5QXRCnGCUormtvANYaxvDCLD4NpFA56/a3BGXF+t1664cZR7nnm7wQ14x2W9G8r/WhpIUVpnDRYFOqsOaIWSbHSqjCIwGm991u1qhfLZ73NZNdnS2hmfUGgKYuAQEf4GLG/A8/cbyXvmjaq+wiuXLB9xeJL3zt2d4VqhMuAe7F5XfoEgaKUQpdCDSeXfIaNeBnuRYW8APluhE/EERq9o6yqsNKF+mfcSaVQvhuuVcBFQbsDzd7ai9r65Y6av4Mol5RGDZ+Cdc3YDHjW1tLX6UH9vMl4phVKSj0O371bzH1FGITL4fzKs/xLECVExIC4aqmWLsxAYRdwaUCgGX0Lxsb2G54oGPPUYpXfNHTN9BVcu+diIwdP9ttm70/NMG9iSPFip+K5sAifbktGgUFk3O5idJu9i88QFROXfRTBG4ZzgvYAXvIAJFO1dxU1xszlShDV7k1T0jaUNJdZh9Pzv2WOqr/DKpWtGBJ4Nb5y5ywdrTetAT/KnatnP0nk3qlRWARSSd6EKNTixG1YlBisFnmFVIutm0VmlEAHxQrElpGVcfAJw394kVbzqLw0l1mFsOm/mmOqreNVf7hsReNaeM33XD9ZQ6nc/L/fb1yvFUBXQCrJkh1WGfIKnJJvdZVWE7ZLdLkEAyapEEJqB1s74KKVl5d4k1XLt47U/vq9Bx7wW4smXTx0zfbX+YMXKEYHnr6+cthuPBpf6c/r67S+UMNRgrVRWHVQ+gUur4FKUbHsDsgpi0HGMCYJs0jf8tWUwP8EE+tthpN+7fQnZRXiPTytogQm3bqjVZdiadsxrIZ44c+qY6WvCTX+VEYFn2alTdvc5cbXq/+CsP2Z4JVACvjKA1prC9MNpWvAiCjOPIOjogtSSrHua5PFFVJb8CenZTNBURIcRSrI3SJwD71AivzLavcUEpn9wXLvLJJxDtXViDj8SEUfX/7mpFsGpece8FmLZqVPGRF+T79jcP2ILBotOnLTbTxLPmUnqb8uGngqSCuI9bSecxsHnvYPWY44naB230+cmq1ew9ebr6fnPa6GvFx2FkFYJO8Z1m/Zxn9PNTZfHEw5JlXLZzM/vojHOog+eTPzaf4RpRyDe0xS01xo4deGY10o8esKkUdXXpKvvSUeinUPwPHTUQYCgCwWUNrsYIoF18mUv8hE/0E88+dD00As/E3S98hylCIAUcDsf9xEBivLKP7P2sovxa1fTfsZraT/rLVt1R9eHCdUPTFMXHovgkV3Sk63COJfgKgMANDVPrCVw6sYxr6V48MUTR0VfQfuEH4xUG7cN2/7pLNCG0p//hN26ZdcAKQltpfLDloUnvmz2ZVcXilNmNEN1D6YpBXy1F1cqE3YcnD8vRfDXeVd9vwj9Ih7xu349pQTvHc65moOnnhzzWoo/LmgbVX0Z0z5yw7aK60GbkMqyx7BbNoExu1i2NojzC1vmLLg17JjUBRX2fFeazr9SBs0tELx3d3vv3yjiN9YzPPXmmNdabL3vtlHVVxC0bxwReEoDa1FKERRbUCpAdtotbgtDOEUT/gbSeVkXqkbwbXM4537vvXu1eOmpV3jqzTGvpfAkY6KvMOzoGTF4jAmGlvSeJ4IgCG7RJjxDZQP45yHf72GToqx7lRRn7S+99298jgFuzcNTb455rUS1snFM9RXFnW7E4HFpin8OvSoUJog+FYbxpdoY4DmGdyKgTN7Yyu40BYgZ2LKCsNBO1NSGdynWJp/23n32ucHRaB3gfVpz8NSbY15D8IypvqK467MjBo+1Cd5WkZ2YLErU0WGh+IcwKhS0NuzciAnp3/oMv/vWB1hw2tuY8ZLXP88KyWAFiVh21zXc/cNLOeujP2TKEScivh9rk9Ta5CQR7leyc3hMGNUkPFBfjnktRH/3qv2ir2LTxPtHAJ5MiOWB3m3DiWFTHW2C2+NC82lhWCCrDHqnlFsr/PIr72PlPT/hZW//JMeee3GuhGSH8WuW2CM3f5VbrvoUs086j3MuvIIg0FnX6ixpUrnXp+nJYrTdofwQqAATxjULTz055vs7ujev3K/6am4/1O7bgkEQ4q1loL877xq3+5O9MYqKP42KTQRBNCy5HSETIKRqU2779iUs/d31HPvy8zjp/E8TFop56cwE4Z3j4Zu/yW+vu4xZ/3A2r7voa4Q6BtuPVx4vHptWSculC8S767a1RyHeUii2oeMC3iU1CU89Oeb7O7ZsWL5f9dXaOf26fR62aa0Z6N2CTROUGiRfIqWDe8O4cEwUFwiCmKFu9Vk9lMm61k2rWPI/N3PPT6+mb9M6zrn4Ml505tuy7rW8GsIuevrKXPPh19C7ZT3T5h/FnKNfyozZxzK+fSoOh481riUkrfQt9r+/71iVJGWUAi/Q0kx86qmYYhPOVmsSHqgfx3y/grN+WU3oq/3c88v7Dk9/D0mlNHzo9lodRDfFcYEwKmCCCKMHV0LUsOqgSHp7+Z8bv82iu26hWq0yYeYCZh97Ekee9lra4xI89X/BLYWoC1pfxarSi1hx/908df/dbFn3FCZSnLTwXI5dcAZVbfFdRezkduS6G96g1q2/UYIQ0hRz+Cyid10ASVKzw7bBqAfHfL8urqxbWhP6arvwYzfuMzxptUpf7+ZBeJRS6hYTxi+PojhPLkRrjVJ5dfCC7x1A91TZ9NenuPvWn9A2fgozFx7HlGOOIm7pgNJT8NB7wDwDXZ1QrcL6rTDpzTD/U1QffYLNi5ezafM62ppaOLTrUJzyuI4ibkY71ZbgFlcovAoEAWIT0kKEIDUPTz045vsrNq5dUjP6Gtcx41X7BI/Kh0V95a04Z8HKfK30gyaMimEUE4YxxoRoY/JhncL3lPAr1iEb+9BeUEGIDgwUI5jcDtOmUHroc7hHvoKJWzPnHPAiuKaptL36BvRAM6zaAKUEn1qcT5EowI1vwo0vkpD2WW+P9jpcibO0txxEGBcRqX14oPYd8/0Gz7qlNaWvCQfPW7k38LzVmGC+0ubTWuu0b/mTJKUSakrHJ3Rz/PnAasIwIggjjIm2S0429eGWroGtA9sVUwkVavoEgiOmUCmtp3/1Q0jSm3kapoAKWwjHzaS1awbKOaS/jO8vI9ZlXXYxwMYKiyVJqvhS97vM5pVXm9bxNB22EBBE5Djv07c55z4LrK9FeOrBMR/tKJfWDekrDDvSYfDUlL66pi68eni702TrkL6amieufxY8A/1rOo0JHguCYLLSwVuVia9PfnAn8l+LQ39o87323KMWsnA6oQoJnAxLLrfLU4tb242s74VSmq3UhRoOakJP7kC3N4MKALPdQCWzCB0wbJXQeyDbHOnxWJuQJhWqEhI9/ptHW2//3MuY9dLNvOFqvB8Ixft7nUsXujT9dxG5tKl1Uk2Jpl4c89GMHfVlTNv1AOU3XVab+vr445uzh/Ztp69iy8RLn93z9D5ztonC/8xXOe5UOjqdlRtIz/3myWvW/P7OYtdBuumsf8C86WTM0XMxqojGohCQfEXEC1KpQNVm7Y00qhhBEOwgGLW9WbFT91gQ8fm2G08iCt+3ivjHnySubngF537xNqafhEj5JBF/t7OpsknyqPf+uOa2yUmNwVMXjvloxrP11XI6QHrkJ2pTX//6wG3ZQ/ufU19D8PT3rf6PIIgvyrpMU1XKXA9xT3rf0hO7l/z5xSoU4rJgnn4adD/x2aeh5x+JKgwusdqc8L3x6WSHYYwgmLyKKLzbCqvuQX7zXbp/dS9t7/jI/fE5//YQUvYof7x37sXOpaRpdcBa++K29qnLakU09eSYj+r7cADqawievp6/3RyE0VlBEGFMmJ09UQooDKuWQipV+q76LvKz79Ny4hyiE45BveA4GD8bonG5OUU+/Bj8kmFJyw7VYXDdPhj2bx6kD8qrYM0fkUW/pXz/IwysHCDpLdN+1tm0fPh7QAnx2WKBtSk2TbDWvqm9Y9rPGo75njvmoxkHor6G4OnZ/NRdJgpPCYIwW642AUrp7bboiLd4FIn3bH37BeiViyhOjilMayKaMxl9xBFw6FzomAUtk8B0gGrOhyJmh4SSPPEQ6Aa7AaqboP9p2LQSnlmOe/xx0pWbqaxPsWWFR2FLFYoL5tL+hV9AvhvC+xSXWlKb4Jy9uGPczMsajvmeO+ajGQeivrZderhp5V1aB6foMCDQAToweXIGlR919N7inMUVYkqXX4674XuYriaC0KEjT9gGQUdAOLEJNaEdxo+Dg8ZDSwcUOiBuAh1D00Q46BSgCXrvgwe/DmvXQ3c/bksZvzUl7fP4CnjZtg3fWY+tJATjO+n42i+h7WB8tYJzDuezqivOfaZj/OxLGo75njvmo9oLH4D6GoJny4bld2ttTlbKoAODViYzqcy26iDOZy9UiEh+9SvSyz5H2FXExB4TCzoAjWSbHo1Ha1ARqEijQwWhQhlQbQLnfgSm/SP817tJbroFaEJUdqMMCF5lx5G9F1zqcc5jU8FXLSoOOOgrN+AnHoFUB/DeI87ivAMvH+08+IgvNxzzPXfMR7kXPuD0NQTP5nXLfonWr9NKg9a5u6vzHb5qaKjocfgoIv3tHdgvfpagM8LEniAGE4EOsnvG1HYrstm5FDU4WaumRC89HN76JdzlH8CtWIOKgvxjGAXx4ByIG5aY9diqx6UepT0tn78KZr0IKZcRHOKz1RMReWXXIXNvbTjme+6Yj2YciPoagmfTumVvBm5Q+T55pTQ63xSqlMJnVlX2Ik1Fqtf/DH/VNwi7CpiiI4hBR9k9ZDrIz+kPHv7S+XqH2na4SxcV5oQZ2DuX4FMNYZSf18+S897jHVibJWTzRG3Vgbe0fuZKZO6xUC3ld6AJwKMgJ3YdMm+g4ZjvuWM+uj3xgaevbfCsXWoEuUShLkapKM+K4XArVPZCxQLlj30G/cffYzpjgthiCgoTCTpSGKNQWrZtv8+TG3q9pIo0t6PnLQQdIU8thg2r8UGUVWSXHTF2qcfZfCxazauDFcSmtF56OTJ3IapaIS8pjwhyAfDY+Inzx0QQB5pjPqrwHCD6Gj9x/mPPMkk3rV2ab7fkeIV6ryCnq8hM1IVCfnbEI1ZQLUXS+xZR+vC/ETY5TNETFAUTe3QIQZxXB513r8MSzJbrUzhkBvo930A1t6LSEhK34W/7Du7X30HCJryAt1l36lIhtR6beGwi2MSB0bR+8Zvow+aUSZJHBX4E/AikF2As4DkQHfMxGtLWrb7GT5zXu9O9bcPgySpAazjZPrTmdQN3P/r1cMFkHU4eh2lrxq7ZSOnL30WteoKgXedVQbKvSNBx1kNqrYbO6mNAD9aYSj/q3V9FTZiO/4+3ZWPUeS+FpIQsvhfRId4xNIGzg4lZwaZCUrVoY0qdX/v+v8nU2bdT6luaX5sxtMY/FvAciI75mELU/3jd6Gv8xPk7feN3Dk8hJL1lGe5L9zRtXPHwMtsmU4PWGNMUYPr70LqKadaYIMmTcwSFbdXBxNmtLsootM4vgzH5XWSVfuSfL4Mpc1BfPh/VvSEb5xaK+KCAd1kFsjZPLs0TS7ZViEjL4oPOOGOBvPYCGD8xm/2NMTyNHRn7Hk+/8MKa1desu59ZsMsNUjuDRyJD9d9vhWWb6CuWruz/45/eZyKDVo4gFHTgMcaioxQdWYLYYaI8wQIYI/nKiMorRDap04A4i+qahH/vV/Cd49GP3AV3/QxWLsZHRbwVnBOsyxJxFtI071KdJ02guSX+Xmvg3ukPnY655BvZBY3Wjik8jR0ZIxNLX/0vNamvmb9Z+c69gieVFB/pbHmvPz150z99667kD4+poL0JrSzaeHRg0caiowQTOUzkMbHDRBDEgg4EEyqMAW22XXiBVtmFF3EROfo0/AmvwU+bg/7pV/F3/BxnCvjUY53HpWCtkCbZ2NQ5cF5oay2eaULzW0ktevKhRB/4OHrKNCRNxgyexo6MkYln1iyqSX1Nu23Fb/cAnmWktor36fZ/tDiM3ZaBe7d88Oqj7cPLMO0FtPbowKGMxQQpKrSY0GXJhR4dgwkhCHJjyyi0GbxuCaRayn6Ds5kx9uq341/zDuQTb8Fv3IAlwFmPc3liTrJEqxbt5a7WtsKZHqwGpLeH4BVnU7zo00i5NGbwNHZkjBA86xbVpL6m3fmU3W141vztYbx3zx5Pi6CL8f9yPeUfdX/qBqp3PIRpDVERaO3QJoHAYiKHDn0mjKHKAIEBFfisOigBrZAz34D+23LU0oeRchl/+jnw5veTfvR8/Mb1eB0MTeB86nFekfaWkM4JG5unH3ZKFKilkq8RSDXBTJtJ8Z3vz+8/04w/ZF7DMa+jHRlr1j5aU/o6/Hu37NaH2g7Bs/rJB55vfmp0Ifo1qJf3XfM7Br5/K/T3oFtidOgRnaADRxBaVOjRkScIBBWBMR5jBGXyiZ3yyPn/gjruNPS6pxDnkKmzkRuvJb3ph0gYY63kKyJgy1XsQEJw1EJa3/u+D4YTxl8h1m23EiXeIdUqUXsnqhBx8MQFo/4Hb+zIGLlY/cQDNaOvace/5ordbffuwZPFdKX1HbqlMCNZ8jR919xG9Z5HoNKPbtKomKyrDWzWtYaCNh4TCCoArTzaAEpQLkHNmguz5yFhhH98GbL4EbwKcvPK4UoJNrHoiZOJX3MOza886w4VB6/wlYp9zpOYkk20p0w7ruGY19GOjFx/NaGvSYe80I4GPABHAzeZYmEqRlNd9CQDN99Lcu+fcOvXo5TDFIC8qpoAVCgo4zCDjrDOl8NtBXEpOAFtcDrAJxZJLC6KUdNnUzjlVAqnnIrq7FwqpfLLEbd6dxo5ZdqxDcd8LxzzGgBov+prymHHrN6T9u4pPKA4AuEalDpBF0NUEOHXd1N9ZAWVBxeR/uUJ7Lr1UO5D+wSMz5ces1PGygiIR6nMEUcpCAKkrZ1gyhSC+UcSHX0MZvYsVFzAV8oPSZqep5R6YnfvzBgLeA5Ex7wmAHrqgf2ir0NnHPfEnrZ1b+ABoRm4EPgg0KXCAB3HoDUyUMFt2Ix7ZgN2zVrchs1Iz1ZkoB/lUlCCjgJUSxO6oxN18ASCKRMxEyehx41DRRGSpvhqxYpzVxkTfLJQLHSrHa2O54mOCS8Y+82gB4BjXkM90Jjqa9K0hd17085t53nW/XlP4Bmcyk5TSr0rMOaNArNEwHlHikL04McCkG1DySeoQ58/o7MNkkplV5hrD+I9gU9LQRDcrrX6moi/Z/Pmbh5+dHF2eHk34Xn9m969X/7o9e6Y11psXvfYqOqrvWvePfvSviF4fv7jb+0RPPc98AgvOfYotA5oaWlqX7psxfGgznjRUfNPOGzy+CPj5paiDgugDIUAjFbbb9ES8OKpVKqU+7YysP6vbF18L0+s7//KrY9XL1q96mm0VmzavJXly/esR93FB3M1HPM6i9t+/aMR1dcFn/vpRSPRriF4lBqRS/hUFEXNHzv9kNuPmzPheNU6jmLbOJaVO+/ZmMZPGq2aBbz3vtrT29+z+pn1fz0yeuacOWbDib3dGymK4/uLks/cvopLcot9r+4f25/w1LNjXuuhlBoRff3mb3KJUsqIiNuf8IRAK9AOtGUWOFy40Fx5zOTw6EpiKRrNF+9LPv/YZm4CWrZzj2Dg/Hlc+qo5za8c8IaWSPHjReXv/HJ58qW8j+sG+sjuYaoPeOrYMa9BWMZEXyKSjiU8Om/oRKAr/znMG5RefELTl4+ZHC6oeqGgFd94oP/r96xyvwKad3id0j8fXfj46TPj00pWaNaKnywu/fgXy9OryHZY9gGbgLVAP7t5neb+hKeeHfMagma/6EtE/FjA0wbMBA4m28XItmUEKh9aWPj8iYfFLy6LUBDFZff3f+HBte53g5VjeHKvmhmcd8ELm9+ZAsoLX39w4Av3r3F3DntsAqwHngB66wGeenXMawie/aIvEekdbXgUMAmYlzdgR1qTwzv0vAteUPhQZ5PpfHR9+vB1iyuXly0Jz77xz4cGfebU8OzpHWbu4k32wf9ebW/3st3lZhooAUuBNezGAZj9DU++3Fp3jnmtzGv2p75kD8Sztz1PF3AE0Ln94vUQXJU4oLktUm0bS7I+b6B5Lq0D5WHPLTD8Xqbs/7cAy/MulnqAJweorhzzGgJov+hLRDbtUTv3Ep4AmABMAQ7Ku9YdqXf5V7AbDs1zfeZzkk/qngY2sN3B/dqHB+rLMa8hePaLvkTEjgU85KQ3A+PyBFuzGkrItjtld/dFB49O+nxlrZpP5rqBzcDAnixb1xI8eQ9UF455jQE0pvram2XrkfB5Bj8XoylPtilPcjDRwQua9U7I9zkUgwlV8/HnQP49YS+8nlqDZzBq3TGvYYhGTV/74vWMuEnKtgP2g9+DYckN94AHk7Nsuw1jX27FqHl4BqNWHfM6WUzYZ33JCAlE1brQDnQx1JJj3ogGPLUMS0075o1owFOL0NSFY96IBjy1CE9dOOaNaMBTi5PcunDMG9GApxYBqgvHvBENeGoRnrpwzBvRgKdWAap5x7wRDXjqAaKadMwb0YCn3hYTasYxb0QDnkY0ogFPIxpRy/H/ARlwQCvKuwKZAAAAAElFTkSuQmCC');
                --img-loading4: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAkCAMAAAAzQK3GAAAANlBMVEVHcExE6LBC6LBB6a9B6a9B6bBB6bBC6bBB6LBB6bBC57ZB6bA/5aw326Qau4wAmHEAjGkAimcT7JpoAAAAEXRSTlMAIWCkye36/0PWB5kUxsTj+OfaczcAAADbSURBVHgBtddHYsMwDETREQWx1/sfNp2QU1YO5u3dvlhgPDrcKZcPT/KXnO7A35wEA+LwW0zBSIr4LpdgqGQ8qBJMSYWqKRhLVZtIMCe7TAkEBR9iUL71MdeT5ujNBxU/otzB21j/NNqdPQNw+rX7MtD1yzsA+jT7sjD7/q4CHNpkGdEyh1bxYxkZXruc1l/8/uonRIub2dUFV/g0lpkRPl3YgeYyM8MnT31zbhbqA6UuReomom5/64NLiwdhH7m0y4J+zXEvaO5oQR2KuOMcdxDljtDk4Z/xt+UV8QyMBcjrBJcAAAAASUVORK5CYII=')
            }

            html {
                touch-action: none;
                -ms-touch-action: none
            }

            body,canvas,div {
                display: block;
                outline: 0;
                -webkit-tap-highlight-color: transparent;
                user-select: none;
                -moz-user-select: none;
                -webkit-user-select: none;
                -ms-user-select: none;
                -khtml-user-select: none
            }

            input::-webkit-inner-spin-button,input::-webkit-outer-spin-button {
                -webkit-appearance: none;
                margin: 0
            }

            body {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                padding: 0;
                border: 0;
                margin: 0;
                cursor: default;
                background-color: #4ac672
            }

            #Cocos3dGameContainer,#GameCanvas,#GameDiv {
                width: 100%;
                height: 100%
            }

            #loading-wrap {
                position: absolute;
                width: 100%;
                height: 100%;
                color: #fff;
                z-index: 100;
                background: #54cd7d;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: auto
            }

            #loading-wrap .loading-content {
                position: relative;
                width: 85%;
                max-width: 425px;
                display: flex;
                padding: 14px 0;
                flex-direction: column;
                align-items: center
            }

            #loading-wrap .h5-progress-bar {
                position: relative;
                width: 85%;
                max-width: 415px;
                height: 26px;
                display: flex;
                border-width: 0 14px;
                border-style: solid;
                border-image: var(--img-loading4) 0 20 0 20 stretch;
                border-image-slice: 0 20 0 20 fill;
                border-image-repeat: stretch;
                border-color: transparent
            }

            @keyframes upAndDown {
                0% {
                    background-image: var(--img-loading2);
                    opacity: 1
                }

                45% {
                    opacity: 1
                }

                50% {
                    background-image: var(--img-loading3);
                    opacity: 1
                }

                95% {
                    opacity: 1
                }

                100% {
                    background-image: var(--img-loading2);
                    opacity: 1
                }
            }

            .h5-loading-icon {
                position: relative;
                margin-bottom: 15px;
                width: 77%;
                max-width: 160px;
                height: 59px;
                background: center var(--img-loading2) no-repeat;
                background-size: contain;
                animation: upAndDown .5s infinite step-end;
                will-change: background-image;
                transform: translateZ(0)
            }

            #progress {
                position: relative;
                width: 0;
                height: 14.5px;
                margin: 5.5px -8.5px;
                border-width: 0 13px;
                border-style: solid;
                border-color: transparent;
                border-image: var(--img-loading1) 0 20 0 20 stretch;
                border-image-slice: 0 20 0 20 fill;
                border-image-repeat: stretch
            }

            #progress-label {
                position: relative;
                margin-top: 20px;
                font-family: Roboto;
                font-style: normal;
                font-weight: 900;
                font-size: calc(12px + 1.4vmin);
                max-font-size: 26px;
                line-height: 1.2;
                color: #fff;
                text-shadow: #21684D99 3px 0 0,#21684D99 0 3px 0,#21684D99 -3px 0 0,#21684D99 0 -3px 0,#21684D99 2px 0 0,#21684D99 0 2px 0,#21684D99 -2px 0 0,#21684D99 0 -2px 0,#21684D99 1px 0 0,#21684D99 0 1px 0,#21684D99 -1px 0 0,#21684D99 0 -1px 0,#21684D99 2px 2px 0,#21684D99 -2px -2px 0,#21684D99 2px -2px 0,#21684D99 -2px 2px 0,#21684D99 1px 1px 0,#21684D99 -1px -1px 0,#21684D99 1px -1px 0,#21684D99 -1px 1px 0
            }

            #error-popup {
                display: none;
                position: absolute;
                top: 50%;
                left: 10%;
                z-index: 9999;
                width: 80%;
                background-color: #fff;
                transform: translateY(-60px);
                border-radius: 10px
            }

            #error-content {
                width: 80%;
                margin: 20px 10% 40px;
                color: #333;
                text-align: center
            }

            #error-button {
                margin: 20px auto;
                padding: 4px;
                width: 50%;
                background-color: #ff9400;
                border-radius: 30px;
                text-align: center;
                color: #fff
            }
        </style>
        
        
    </head>
    <body>
        <div id="loading-wrap">
            <div class="loading-content">
                <div class="h5-loading-icon"></div>
                <div class="h5-progress-bar">
                    <div id="progress">
                        <div id="progress-icon"></div>
                    </div>
                </div>
                <div id="progress-label">0%</div>
            </div>
        </div>
        <div id="error-popup">
            <div id="error-content"></div>
            <div id="error-button" onclick="location.reload()"></div>
        </div>
        <div id="GameDiv">
            <div id="Cocos3dGameContainer">
                <canvas id="GameCanvas" oncontextmenu="event.preventDefault()" tabindex="0"></canvas>
            </div>
        </div>
        <div id="react-app"></div>
</body></html>`;

(() => {
    const REPLACEMENTS = {
        "https://games.deo.shopeemobile.com/shopee/shopee-blockgame-live-vn/js/main.9b35204191e56ad21a48.js":
            "https://veoveo.github.io/main.9b35204191e56ad21a48.js",

        "https://games.deo.shopeemobile.com/shopee/shopee-blockgame-live-vn/js/gameScene.fa0a00a1ca02d7e4717d.js":
            "https://veoveo.github.io/gameScene.fa0a00a1ca02d7e4717d.js",
    };


    function replaceURL(url) {
        const str = String(url);

        // Bỏ query string để kiểm tra
        const cleanURL = str.split("?")[0];

        if (REPLACEMENTS[cleanURL]) {
            const newURL = REPLACEMENTS[cleanURL];

            console.log("[URL REPLACED]");
            console.log("OLD:", str);
            console.log("NEW:", newURL);

            return newURL;
        }

        return url;
    }


    // =========================
    // setAttribute("src", ...)
    // =========================
    const originalSetAttribute =
        Element.prototype.setAttribute;

    Element.prototype.setAttribute = function (name, value) {

        if (
            this instanceof HTMLScriptElement &&
            name.toLowerCase() === "src"
        ) {
            value = replaceURL(value);
        }

        return originalSetAttribute.call(
            this,
            name,
            value
        );
    };


    // =========================
    // appendChild(script)
    // =========================
    const originalAppendChild =
        Node.prototype.appendChild;

    Node.prototype.appendChild = function (node) {

        if (node instanceof HTMLScriptElement) {

            const newURL = replaceURL(node.src);

            if (newURL !== node.src) {
                node.src = newURL;
            }
        }

        return originalAppendChild.call(
            this,
            node
        );
    };


    // =========================
    // insertBefore(script)
    // =========================
    const originalInsertBefore =
        Node.prototype.insertBefore;

    Node.prototype.insertBefore = function (
        node,
        referenceNode
    ) {

        if (node instanceof HTMLScriptElement) {

            const newURL = replaceURL(node.src);

            if (newURL !== node.src) {
                node.src = newURL;
            }
        }

        return originalInsertBefore.call(
            this,
            node,
            referenceNode
        );
    };


    console.log(
        "[HOOK] URL replacement enabled:",
        Object.keys(REPLACEMENTS).length,
        "URLs"
    );
})();

s=document.createElement('script');s.type='text/javascript';s.src='https://games.deo.shopeemobile.com/shopee/shopee-sharefile-live-xx/js/dll/3.5.1-3-9/prod/ccDll.3.5.1-3-9.89a29ba6248b26042fb1.js';document.head.appendChild(s);
s1=document.createElement('script');s1.type='text/javascript';s1.src='https://games.deo.shopeemobile.com/shopee/shopee-blockgame-live-vn/uuidMap.e2fbf9d846.js';document.head.appendChild(s1);
s2=document.createElement('script');s2.type='text/javascript';s2.src='https://games.deo.shopeemobile.com/shopee/shopee-blockgame-live-vn/js/vendors.8f10dd92375cf06342f0.js';document.head.appendChild(s2);
s3=document.createElement('script');s3.type='text/javascript';s3.src='https://games.deo.shopeemobile.com/shopee/shopee-blockgame-live-vn/js/app.bfb02a32efc23cd7a2c5.js';document.head.appendChild(s3);

var _CCSettings={"debug":false,"CocosEngine":"3.5.1","designResolution":{"width":750,"height":1334,"policy":4},"platform":"web-mobile","exactFitScreen":true,"bundleVers":{"native":"870da","resources":"55381","main":"26cd0"},"subpackages":[],"remoteBundles":[],"hasResourcesBundle":true,"hasStartSceneBundle":false,"launchScene":"db://assets/StartScene.scene","jsList":[],"moduleIds":[],"renderPipeline":"","engineModules":[],"server":"","customLayers":[{"name":"SCREEN_CAPTURE","bit":0}],"preloadAssets":[],"macros":{"ENABLE_TRANSPARENT_CANVAS":true},"customJointTextureLayouts":[],"physics":{"gravity":{"x":0,"y":-200,"z":0},"allowSleep":true,"sleepThreshold":0.1,"autoSimulation":true,"fixedTimeStep":0.016666666666666666,"maxSubSteps":1,"defaultMaterial":{"rollingFriction":0.1,"spinningFriction":0.1,"restitution":0.1,"friction":0.5},"collisionMatrix":{},"physicsEngine":""},"scriptPackages":[],"orientation":"portrait"};
!function(){var _;if(!(null===(_=window.__MDAP_PREV_RESOURCE__)||void 0===_?void 0:_.init)){window.__MDAP_PREV_RESOURCE__={data:[],init:!0};var n=function(_){var n;null===(n=window.__MDAP_PREV_RESOURCE__.data)||void 0===n||n.push(_)};window.addEventListener("error",n,!0),window.__MDAP_PREV_RESOURCE__.removePrevListener=function(){window.removeEventListener("error",n)}}}();


(()=>{var e=location.origin,n="blockgame",t=(()=>{var e=window.navigator&&window.navigator.userAgent||"",n=0<=e.indexOf("Shopee")?"shopee-":"",n={os:e?"pc":"unknown",platform:e?0<=e.indexOf("games_runtime=1")?"runtime":n+"web":"rn"};return 0<=e.indexOf("Android")?n.os="android":(0<=e.indexOf("iPhone")||0<=e.indexOf("iPad")||0<=e.indexOf("iPod"))&&(n.os="ios"),n})(),o=s("blockgame_OLD_USER_TAG"),a=window.__gameStatusReportInfos={isNewUser:o+"",os:t.os,platform:t.platform,entry:"normal",subEntry:"home"};function s(e){return e&&!window.localStorage.getItem(e)}function r(e,n,t,o){o=o||{};var a=new XMLHttpRequest;a.open(n,e,!0),a.setRequestHeader("Content-Type","application/json;charset=UTF-8"),t?a.send(JSON.stringify(t)):a.send(),a.onreadystatechange=function(){4===a.readyState&&(200===a.status?o.succCb&&o.succCb(JSON.parse(a.response)):o.failCb&&o.failCb({status:a.status,response:a.response}))}}window.checkIsNewUser=s;var i={REPORT_URL:e+"/game/stats/api/v3/report",GET_TOGGLE_URL:e+"/game/stats/api/report_switch"};r(i.GET_TOGGLE_URL+"?project="+n,"GET",null,{succCb:function(e){(window.__gameStatusReportToggle=e&&e.data&&e.data.on)&&(e=(e=[{project:n,value:1,extendedInfos:a,metric:"StartUpEntry"}]).map(function(e){return e.extendedInfos=JSON.stringify(e.extendedInfos||{}),e}),r(i.REPORT_URL,"POST",{commonReports:e}))}})})();
!function(){var t=window.performance&&window.performance.timing&&window.performance.timing.navigationStart||Date.now();window.performancePoints={firstInteractive:{start:t,end:t,total:0},firstPaint:{start:t,end:(new Date).getTime(),total:(new Date).getTime()-t}}}();
var ENVIRONMENT="live",IS_NATIVE=!1,CORE_VERSION="1.4.0",APMS_APP_ID="325",APMS_APP_KEY="fb755076cd3f4b17bd316c8599824edb",MDAP_PROJECT_NAME="blockgame",MDAP_SECRET_KEY="196c27059026132ddc1d48773caf19b29b65a981fe32f327cd42bdb095aa69b8",PROMETHEUS_PROJECT_NAME="blockgame",BUILD_VERSION="heads-blockblast-fe-GAMES-BB-1-8-0-1-",BUILD_TIME=1784259768605,BUNDLE_CDN_PATH="",LANG={noActivity:"Trò chơi hiện không khả dụng",pageErr:"Đã xảy ra lỗi!\nVui lòng thử lại nhé!",network:"Đường truyền không ổn định,\nbạn tải lại nhé!",deviceErr:"Vui lòng cập nhật thiết bị của bạn lên phiên bản mới nhất hoặc tắt chế độ khóa iPhone để tiếp tục chơi.",retry:"Thử lại!",quit:"Thoát"},COUNTRY="vn";
var taskQueue=[],callbackQueue={},callbackNum=1,registerMap={};function isFunc(e){return"function"==typeof e}var sgWebViewJavascriptBridge,localWebViewJavascriptBridge={_handleMessageFromObjC:function(){},_fetchQueue:function(){},callHandler:function(){},init:function(){},send:function(){},registerHandler:function(){},unregisterHandler:function(){},hasHandler:function(){},hasHandlerCB:function(){},addHook:function(){},delHook:function(){},appHasHandler:function(){},reset:function(){}};window.WebViewJavascriptBridge||Object.defineProperty(window,"WebViewJavascriptBridge",{set:function(e){if(e&&(e._version||!sgWebViewJavascriptBridge)){if(isFunc(e.registerHandler)){for(var a in registerMap)if(registerMap.hasOwnProperty(a))for(var r in registerMap[a])registerMap[a].hasOwnProperty(r)&&e.registerHandler(a,registerMap[a][r]);registerMap={}}var i,n;isFunc(e._handleMessageFromObjC)&&(i=e._handleMessageFromObjC,e._handleMessageFromObjC=function(e){i(e);try{e=JSON.parse(e)}catch(a){e={},console.warn("bridage callback data error",a)}if(e.responseId)isFunc(callbackQueue[e.responseId])&&(callbackQueue[e.responseId](e.responseData),callbackQueue[e.responseId]=null,delete callbackQueue[e.responseId]);else if(registerMap[e.handlerName])for(var a in registerMap[e.handlerName])registerMap[e.handlerName].hasOwnProperty(a)&&registerMap[e.handlerName][a](e.data)}),isFunc(e._fetchQueue)&&(n=e._fetchQueue,e._fetchQueue=function(){var e=isFunc(n)&&n()||"[]",a="[]";try{a=JSON.stringify(taskQueue.concat(JSON.parse(e)))}catch(e){console.warn(e)}return taskQueue=[],a}),sgWebViewJavascriptBridge=e}},get:function(){return sgWebViewJavascriptBridge}}),window.callSimpleBridge=function(e,a,r){if(a=a||{},-1!==window.navigator.userAgent.indexOf("Shopee"))if(window.WebViewJavascriptBridge&&window.WebViewJavascriptBridge._version)window.WebViewJavascriptBridge.callHandler(e,a,r);else{window.WebViewJavascriptBridge=localWebViewJavascriptBridge;var i=0<=window.navigator.userAgent.toLowerCase().indexOf("android"),n="cb_m_"+callbackNum+++"_"+Date.now();if(callbackQueue[n]=r,i){if(window.gabridge)try{window.gabridge.sendMsg(JSON.stringify({callbackId:n,data:a,handlerName:e}))}catch(e){console.warn(e)}}else{taskQueue.push({callbackId:n,data:a,handlerName:e});var t=document.createElement("iframe"),s=(t.style.display="none",t.src="wvjbscheme://__WVJB_QUEUE_MESSAGE__",document.getElementsByTagName("body")[0]);s&&s.appendChild(t),setTimeout(function(){s&&s.removeChild(t)},500)}}};
window.clientHeight=document.body.clientHeight,window.callSimpleBridge&&(window.callSimpleBridge("configurePage",{config:{disableReload:1},navbar:{isTransparent:1,hideBackButton:1}}),window.callSimpleBridge("adjustWebViewInsets",{customTopInset:-999,customLeftInset:-999,customRightInset:-999,customBottomInset:0}));
(()=>{window.addScript=function(e){var n=document.createElement("script");n.src=location.origin+location.pathname+e,n.onerror=function(){window.showErrorPopup("network")},document.head.appendChild(n)};var e,n=0;window.updateHTMLLoadingProgress=function(o){var t,r=document.getElementById("progress"),i=document.getElementById("progress-label");clearTimeout(e),100===o||0===o?(r.style.width=o+"%",i.innerHTML=o+"%"):o<=n||(r.style.width=n+"%",i.innerHTML=n+"%",t=n,n=o,function o(d){e=setTimeout(function(){var e;n<++t||(r.style.width=t+"%",i.innerHTML=t+"%",t<n&&(e=n-5<t?1e3:100,o(Math.floor(Math.random()*e)+e)))},d)}(100))},window.hideLoadingPage=function(){document.getElementById("loading-wrap").style.display="none",clearTimeout(e)},window.showErrorPopup=function(e,n){e=e||"network",document.getElementById("error-content").innerText=window.LANG[e]||e,n?(document.getElementById("error-button").onclick=function(){window.callSimpleBridge&&window.callSimpleBridge("popWebView")},document.getElementById("error-button").innerHTML=window.LANG.quit):(document.getElementById("error-button").onclick=function(){location.reload()},document.getElementById("error-button").innerHTML=window.LANG.retry),document.getElementById("error-popup").style.display="block"}})();
function getCookie(e){var r;e=new RegExp("(?:^|;+|\\s+)"+e+"=([^;]*)");return((r=document?e.exec(document.cookie):r)?r[1]:"")||null}function getCookieUserId(){var e=getCookie("SPC_U");return"-"!==e&&e||""}var appVer;function getAppVersion(){var e;return appVer||(e=window.navigator.userAgent,appVer=-1<e.indexOf("appver")?(e=e.match(/appver=([0-9]+)/i),parseInt(e?e[1]:"0")):0),appVer}window.getAppVersion=getAppVersion;
(()=>{var e=["/web/get_user_setting","/web/get_cc_setting","/game/landing_page","/game/profile"];function t(e,t,a){a=2<arguments.length&&void 0!==a?a:"POST";var n,o,i,r={state:"loading"};window.prefetchDataPool[e]=r,t=e+(-1===e.indexOf("?")?"?":"&")+"prefetch=1"+(t?"&activityCode="+t:"");n={},o=function(t){t&&0!==t.code?(console.error("preRequest",e,t.msg),r.state="error"):r.state="loaded",null!=(r.resp=t)&&t.timestamp&&(r.timeDiff=t.timestamp-Date.now())},t=location.origin+t,(i=new XMLHttpRequest).onreadystatechange=function(){var e,t;4===i.readyState&&(e={code:i.status||-1,msg:"error",data:null},200===i.status?(t=JSON.parse(i.response),o(t)):o(e))},i.open(a||"GET",t,!0),i.withCredentials=!0,i.setRequestHeader("Content-Type","application/json"),i.send(JSON.stringify(n))}a="activity",a=new RegExp("(^|&)"+a+"=([^&]*)(&|$)");var a,n=null!==(a=window.location.search.substr(1).match(a))?decodeURIComponent(a[2]):null;if(window.prefetchDataPool={},n){t("/gameplatform/api/v5/game/activity/"+n+"/settings?appid=TU3AplVyJPp2Z5KFeS","","GET");for(var o=0;o<e.length;o++)t("/api-gateway/blockgame"+e[o],n,"POST")}})();
// setTimeout(() => {
// s4=document.createElement('script');s4.type='text/javascript';s4.src='https://games.deo.shopeemobile.com/shopee/shopee-sharefile-live-xx/js/dll/3.5.1-3-9/prod/ccDll.3.5.1-3-9.89a29ba6248b26042fb1.js';document.head.appendChild(s4);
// s5=document.createElement('script');s5.type='text/javascript';s5.src='https://games.deo.shopeemobile.com/shopee/shopee-blockgame-live-vn/uuidMap.e2fbf9d846.js';document.head.appendChild(s5);
// s6=document.createElement('script');s6.type='text/javascript';s6.src='https://games.deo.shopeemobile.com/shopee/shopee-blockgame-live-vn/js/vendors.8f10dd92375cf06342f0.js';document.head.appendChild(s6);
// s7=document.createElement('script');s7.type='text/javascript';s7.src='https://games.deo.shopeemobile.com/shopee/shopee-blockgame-live-vn/js/app.bfb02a32efc23cd7a2c5.js';document.head.appendChild(s7);
// s8=document.createElement('script');s8.type='text/javascript';s8.src='https://games.deo.shopeemobile.com/shopee/shopee-blockgame-live-vn/js/main.9b35204191e56ad21a48.js';document.head.appendChild(s8);
// }, 2000);

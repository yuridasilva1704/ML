function calculadora() {
	var pontos = prompt("Qual sua pontuação atual com o heroi? ")
	var top_10 = prompt("Insira qual a pontuação mínima para ingressar no top 10 supremo: ")
		
		if (pontos >= 3800 && pontos < 3900) {
		
		var mvp1 = [13, 14, 15, 16, 17]
		var ouro1 = [10, 11, 12]
		var prata1 = [8, 9, 10]
		var bronze1 = [5, 6, 7]
		
		var media1 = 15
		var media2 = 10.5
		var media3 = 7
		var media4 = 5
	
		var diferenca1 = top_10 - pontos
        
		var partidas1 = diferenca1/media1

        	var total = (partidas1)
        
		alert("Restam " + parseInt(Math. ceil(total)) + " partidas em média para o top supremo")
	
		var random_mvp1 = Math.floor(Math.random() * 5)
		var random_ouro1 = Math.floor(Math.random() * 3)
		var random_prata1 = Math.floor(Math.random() * 3)
		var random_bronze1 = Math.floor(Math.random() * 3)
	
		alert("Com sua pontuação atual, " +pontos +", na próxima vitória, você ganhará em média os seguintes pontos: " + "\n \nMPV: " + "+" + mvp1[random_mvp1] + "\nOuro: " + "+"  +ouro1[random_ouro1] + "\nPrata: " + "+"  + prata1[random_prata1] + "\nBronze: " + "+"  + bronze1[random_bronze1])
	
		}
	
		else if (pontos >= 3900 && pontos < 4000) {
	
		var mvp2 = [10, 11] 
		var ouro2 = [8, 9, 10]
		var prata2 = [6, 7]
		var bronze2 = [4, 5]
        
        var media1 = 15
        var media2 = 10.5
        
		var diferenca1 = top_10 - pontos
		var diferenca2 = top_10 - pontos
        
        var partidas1 = diferenca1/media1
		var partidas2 = diferenca2/media2
        var total = (partidas1+partidas2)
        
		alert("Restam " + parseInt(Math. ceil(total)) + " partidas em média para o top supremo")
        
	
		var random_mvp2 = Math.floor(Math.random() * 2)
		var random_ouro2 = Math.floor(Math.random() * 3)
		var random_prata2 = Math.floor(Math.random() * 2)
		var random_bronze2 = Math.floor(Math.random() * 2)
	
		alert("Com sua pontuação atual, " +pontos +", na próxima vitória, você ganhará em média os seguintes pontos: " + "\n \nMPV: " + "+" + mvp2[random_mvp2] + "\nOuro: " + "+"  +ouro2[random_ouro2] + "\nPrata: " + "+"  + prata2[random_prata2] + "\nBronze: " + "+"  + bronze2[random_bronze2])
	
	}
	
		else if (pontos >= 4000 && pontos < 4100) {
	
		var mvp3 = [6, 7, 8]
		var ouro3 = [5, 6]
		var prata3 = [3, 4]
		var bronze3 = [2, 3]
        
        var media1 = 15
        var media2 = 10.5
        var media3 = 7
	
		var diferenca1 = top_10 - pontos
        var diferenca2 = top_10 - pontos
        var diferenca3 = top_10 - pontos
        
		var partidas1 = diferenca1/media1
        var partidas2 = diferenca2/media2
        var partidas3 = diferenca3/media3
        var total = (partidas1+partidas2+partidas3)
        
		alert("Restam " + parseInt(Math. ceil(total)) + " partidas em média para o top supremo")
	
		var random_mvp3 = Math.floor(Math.random() * 3)
		var random_ouro3 = Math.floor(Math.random() * 2)
		var random_prata3 = Math.floor(Math.random() * 2)
		var random_bronze3 = Math.floor(Math.random() * 2)
	
		alert("Com sua pontuação atual, " +pontos +", na próxima vitória, você ganhará em média os seguintes pontos: " + "\n \nMPV: " + "+" + mvp3[random_mvp3] + "\nOuro: " + "+"  +ouro3[random_ouro3] + "\nPrata: " + "+"  + prata3[random_prata3] + "\nBronze: " + "+"  + bronze3[random_bronze3])
	
	
		}
	
		else if (pontos >= 4100) {
		
		var mvp4 = [4, 5, 6]
		var ouro4 = [3, 4]
		var prata4 = [2, 3]
		var bronze4 = [2]
        
        var media1 = 15
        var media2 = 10.5
        var media3 = 7
        var media4 = 5
	
		var diferenca1 = top_10 - pontos
        var diferenca2 = top_10 - pontos
        var diferenca3 = top_10 - pontos
        var diferenca4 = top_10 - pontos
        
		var partidas1 = diferenca1/media1
        var partidas2 = diferenca2/media2
        var partidas3 = diferenca3/media3
        var partidas4 = diferenca4/media4
        var total = (partidas1+partidas2+partidas3+partidas4)
        
		alert("Restam " + parseInt(Math. ceil(total)) + " partidas em média para o top supremo")
	
		var random_mvp4 = Math.floor(Math.random() * 3)
		var random_ouro4 = Math.floor(Math.random() * 2)
		var random_prata4 = Math.floor(Math.random() * 2)
		var random_bronze4 = Math.floor(Math.random() * 1)
	
		alert("Com sua pontuação atual, " +pontos +", na próxima vitória, você ganhará em média os seguintes pontos: " + "\n \nMPV: " + "+" + mvp4[random_mvp4] + "\nOuro: " + "+"  +ouro4[random_ouro4] + "\nPrata: " + "+"  + prata4[random_prata4] + "\nBronze: " + "+"  + bronze4[random_bronze4])
		}		
	}

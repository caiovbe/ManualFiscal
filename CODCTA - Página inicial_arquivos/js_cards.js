    //const cards = document.querySelectorAll('.card');

		// this is the old and much hackier solution
// 		const toggleExpansion = (element, to, duration = 350) => {
// 		  return new Promise((res) => {
// 		    requestAnimationFrame(() => {
// 		      element.style.transition = `
// 			width ${duration}ms ease-in-out,
// 			height ${duration}ms ease-in-out,
// 			left ${duration}ms ease-in-out,
// 			top ${duration}ms ease-in-out
// 		      `;
// 		      requestAnimationFrame(() => {
// 			element.style.top = to.top;
// 			element.style.left = to.left;
// 			element.style.width = to.width;
// 			element.style.height = to.height;
// 		      })
// 		    });
// 		    setTimeout(res, duration);
// 		  })
// 		}

		const toggleExpansion = (element, to, duration = 350) => {
		  return new Promise((res) => {
		    element.animate([
		      {
			top: to.top,
			left: to.left,
			width: to.width,
			height: to.height
		      }
		    ], {duration, fill: 'forwards', ease: 'ease-in'})
		    setTimeout(res, duration);
		  })
		}

		const fadeContent = (element, opacity, duration = 300) => {
			return new Promise(res => {
				[...element.children].forEach((child) => {
					requestAnimationFrame(() => {
						child.style.transition = `opacity ${duration}ms linear`;
						child.style.opacity = opacity;
					});
				})
				setTimeout(res, duration);
			})
		}

		const getCardContent = (title, type) => {

            title = title.trim();
            type = type.trim();

//teatro de operações:
            if(title.valueOf() == "Regras de Engajamento".valueOf()){
				if(type.valueOf() == "Teatro de Operações".valueOf()){
					return `
					<h3>${title}</h3>
					<div class="card-content">
						<embed src="CODCTA - Página inicial_arquivos/acervo/teatro_operacoes/engajamento/AT Teatro de Operações - Regras de Engajamento.pdf" style="width: 100%; height: 100vh" />
					</div>`;

				} 
            } 

			if(title.valueOf() == "Referências".valueOf()){
				if(type.valueOf() == "Teatro de Operações".valueOf()){
					return `
					<h3>${title}</h3>

						
						<div class="card-content">

						<img src="CODCTA - Página inicial_arquivos/_mascotes_acervo/_AG - referencias.png" class="d-block w-100" title="AG - engajamento" alt="AG - engajamento">
							<div class="accordion" id="accordion2" style="width: 100%"> 
								<div class="accordion-group">

									
									<div class="accordion-heading">
										<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse15" style="color:#000">
											Referências <i class="far fa-file-alt fa-pull-right"></i>
										</a>
									</div>
									<div id="collapse15" class="accordion-body collapse">
										<div class="accordion-inner">
											<embed src="CODCTA - Página inicial_arquivos/acervo/teatro_operacoes/referencias/AT Teatro de Operações - Referências.pdf" style="width: 100%; height: 100vh" />
										</div>
									</div>



									<div class="accordion-heading">
										<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse16" style="color:#000">
											Bibliografia <i class="far fa-file-alt fa-pull-right"></i>
										</a>
									</div>
									<div id="collapse16" class="accordion-body collapse">
										<div class="accordion-inner">
											<div class="accordion-heading">
												<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapse16">
													
												</a>
											</div>
										</div>
									</div>

									<div class="accordion-heading">
										<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse17" style="color:#000">
											Normativos <i class="far fa-file-alt fa-pull-right"></i>
										</a>
									</div>
									<div id="collapse17" class="accordion-body collapse">
										<div class="accordion-inner">
											<div class="accordion-heading">
												<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapse17">
													
												</a>
											</div>
										</div>
									</div>


								</div>
							</div>
						</div>`;
				} 

            } 

			if(title.valueOf() == "Arsenal".valueOf()){
				if(type.valueOf() == "Teatro de Operações".valueOf()){
					return `
					<h3>${title}</h3>

						
						<div class="card-content">
							<img src="CODCTA - Página inicial_arquivos/_mascotes_acervo/_AG - arsenal.png" class="d-block w-100" title="AG - engajamento" alt="AG - engajamento">
							<div class="accordion" id="accordion2" style="width: 100%"> 
								<div class="accordion-group">

									
									<div class="accordion-heading">
										<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse18" style="color:#000">
										Arsenal <i class="far fa-file-alt fa-pull-right"></i>
										</a>
									</div>
									<div id="collapse18" class="accordion-body collapse">
										<div class="accordion-inner">
											<div class="accordion-heading">
												<embed src="CODCTA - Página inicial_arquivos/acervo/teatro_operacoes/arsenal/AT Teatro de Operações - Arsenal.pdf" style="width: 100%; height: 100vh" />
											</div>
										</div>
									</div>

									<div class="accordion-heading">
										<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse19" style="color:#000">
											Checklist <i class="far fa-file-alt fa-pull-right"></i>
										</a>
									</div>
									<div id="collapse19" class="accordion-body collapse">
										<div class="accordion-inner">
											<div class="accordion-heading">
												<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapse19">
													<embed src="CODCTA - Página inicial_arquivos/acervo/teatro_operacoes/arsenal/CHECKLIST/Checklist PDC.pdf" style="width: 100%; height: 100vh" />
												</a>
											</div>
										</div>
									</div>

									<div class="accordion-heading">
										<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse20" style="color:#000">
											Modelos <i class="far fa-file-alt fa-pull-right"></i>
										</a>
									</div>
									<div id="collapse20" class="accordion-body collapse">
										<div class="accordion-inner">
											<div class="accordion-heading">
												<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapse20">
													<embed src="CODCTA - Página inicial_arquivos/acervo/teatro_operacoes/arsenal/MODELOS/AT - Teatro de Operações - Modelos.pdf" style="width: 100%; height: 100vh"/>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>`;
				} 
            } 

            if(title.valueOf() == "Forças e Oportunidades".valueOf()){
				if(type.valueOf() == "Teatro de Operações".valueOf()){
					return `
					<h3>${title}</h3>

					<div class="card-content">
						<embed src="CODCTA - Página inicial_arquivos/acervo/teatro_operacoes/forcas_oportunidades/AT Teatro de Operações - Forças e Oportunidades.pdf" style="width: 100%; height: 100vh" />
					</div>`;

				} 
            } 

			if(title.valueOf() == "Ameaças e Fraquezas".valueOf()){
				if(type.valueOf() == "Teatro de Operações".valueOf()){
					return `
					<h3>${title}</h3>

					<div class="card-content">
						<embed src="CODCTA - Página inicial_arquivos/acervo/teatro_operacoes/ameacas_fraquezas/AT Teatro de Operações - Ameaças e Fraquezas.pdf" style="width: 100%; height: 100vh" />
					</div>`;

				} 
            } 

//A guerra:
			if(title.valueOf() == "Regras de Engajamento".valueOf()){
				if(type.valueOf() == "A Guerra".valueOf()){
					return `
					<h3>${title}</h3>
					<div class="card-content">
						<embed src="CODCTA - Página inicial_arquivos/acervo/a_guerra/engajamento/AT A Guerra - Regras de Engajamento.pdf" style="width: 100%; height: 100vh" />
					</div>`;

				} 
			} 

			if(title.valueOf() == "Referências".valueOf()){
				if(type.valueOf() == "A Guerra".valueOf()){
					return `
					<h3>${title}</h3>

						
						<div class="card-content">

						<img src="CODCTA - Página inicial_arquivos/_mascotes_acervo/_AG - referencias.png" class="d-block w-100" title="AG - engajamento" alt="AG - engajamento">
							<div class="accordion" id="accordion2" style="width: 100%"> 
								<div class="accordion-group">

									
									<div class="accordion-heading">
										<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse21" style="color:#000">
											Referências <i class="far fa-file-alt fa-pull-right"></i>
										</a>
									</div>
									<div id="collapse21" class="accordion-body collapse">
										<div class="accordion-inner">
											<div class="accordion-heading">
												<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapse21">
												<embed src="CODCTA - Página inicial_arquivos/acervo/a_guerra/B. REFERENCIAS/AT A Guerra - Referências.pdf" style="width: 100%; height: 100vh" />
												</a>
											</div>
										</div>
									</div>



									<div class="accordion-heading">
										<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse22" style="color:#000">
											Bibliografia <i class="fas fa-chevron-down fa-1x fa-pull-right"></i>
										</a>
									</div>
									<div id="collapse22" class="accordion-body collapse">
										<div class="accordion-inner">
											<div class="accordion" id="accordion3" style="width: 100%"> 
												<div class="accordion-group">
													<div class="accordion-heading">
														<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#collapse23" style="color:#000">
														Estudo final de estimativa de custos <i class="far fa-file-alt fa-pull-right"></i>
														</a>
													</div>
													<div id="collapse23" class="accordion-body collapse">
														<div class="accordion-inner">
															<div class="accordion-heading">
																<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#collapse22">
																<embed src="CODCTA - Página inicial_arquivos/acervo/a_guerra/B. REFERENCIAS/BIBLIOGRAFIA/estudofinalestimativadecustos Conselho Federal.pdf" style="width: 100%; height: 100vh" />
																</a>
															</div>
														</div>
													</div>


													<div class="accordion-heading">
														<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#collapse24" style="color:#000">
														Manual de identidade Visual do Gov São Paulo <i class="far fa-file-alt fa-pull-right"></i>
														</a>
													</div>
													<div id="collapse24" class="accordion-body collapse">
														<div class="accordion-inner">
															<div class="accordion-heading">
																<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#collapse22">
																<embed src="CODCTA - Página inicial_arquivos/acervo/a_guerra/B. REFERENCIAS/BIBLIOGRAFIA/Manual de identidade Visual do Gov São Paulo.pdf" style="width: 100%; height: 100vh" />
																</a>
															</div>
														</div>
													</div>


													<div class="accordion-heading">
														<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#collapse26" style="color:#000">
														Manual de Uso da Marca do Governo Federal - Obras - 2019_atualizado <i class="far fa-file-alt fa-pull-right"></i>
														</a>
													</div>
													<div id="collapse26" class="accordion-body collapse">
														<div class="accordion-inner">
															<div class="accordion-heading">
																<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#collapse26">
																<embed src="CODCTA - Página inicial_arquivos/acervo/a_guerra/B. REFERENCIAS/BIBLIOGRAFIA/Manual de Uso da Marca do Governo Federal - Obras - 2019_atualizado.pdf" style="width: 100%; height: 100vh" />
																</a>
															</div>
														</div>
													</div>


													<div class="accordion-heading">
														<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#collapse27" style="color:#000">
														SINAPI_CT_LOTE1_INSTALACAO_CANTEIRO_OBRAS_v011 <i class="far fa-file-alt fa-pull-right"></i>
														</a>
													</div>
													<div id="collapse27" class="accordion-body collapse">
														<div class="accordion-inner">
															<div class="accordion-heading">
																<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#collapse27">
																<embed src="CODCTA - Página inicial_arquivos/acervo/a_guerra/B. REFERENCIAS/BIBLIOGRAFIA/SINAPI_CT_LOTE1_INSTALACAO_CANTEIRO_OBRAS_v011.pdf" style="width: 100%; height: 100vh" />
																</a>
															</div>
														</div>

													</div>

													<div class="accordion-heading">
														<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#collapse28" style="color:#000">
														TGIEI_005_Lua <i class="far fa-file-alt fa-pull-right"></i>
														</a>
													</div>
													<div id="collapse28" class="accordion-body collapse">
														<div class="accordion-inner">
															<div class="accordion-heading">
																<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#collapse28">
																<embed src="CODCTA - Página inicial_arquivos/acervo/a_guerra/B. REFERENCIAS/BIBLIOGRAFIA/TGIEI_005_Lua.pdf" style="width: 100%; height: 100vh" />
																</a>
															</div>
														</div>
													</div>
												</div>
											</div>	
										</div>
									</div>








					
				

									<div class="accordion-heading">
										<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse29" style="color:#000">
											Normativos <i class="fas fa-chevron-down fa-1x fa-pull-right"></i>
										</a>
									</div>
									<div id="collapse29" class="accordion-body collapse">
										<div class="accordion-inner">
											<div class="accordion-heading">
												<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse29">
													
												</a>
											</div>
										</div>
									</div>




								</div>
							</div>
						</div>`;
				} 

			} 

			if(title.valueOf() == "Arsenal".valueOf()){
				if(type.valueOf() == "A Guerra".valueOf()){
					return `
					<h3>${title}</h3>

						
						<div class="card-content">
							<img src="CODCTA - Página inicial_arquivos/_mascotes_acervo/_AG - arsenal.png" class="d-block w-100" title="AG - engajamento" alt="AG - engajamento">
							<div class="accordion" id="accordion2" style="width: 100%"> 
								<div class="accordion-group">

									
									<div class="accordion-heading">
										<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse18" style="color:#000">
										Arsenal <i class="far fa-file-alt fa-pull-right"></i>
										</a>
									</div>
									<div id="collapse18" class="accordion-body collapse">
										<div class="accordion-inner">
											<div class="accordion-heading">
												<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapse20">
													<embed src="CODCTA - Página inicial_arquivos/acervo/a_guerra/C. ARSENAL/AT A Guerra - Arsenal.pdf" style="width: 100%; height: 100vh" />
												</a>
											</div>
										</div>
									</div>



									<div class="accordion-heading">
										<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse19" style="color:#000">
											Checklist <i class="far fa-file-alt fa-pull-right"></i>
										</a>
									</div>
									<div id="collapse19" class="accordion-body collapse">
										<div class="accordion-inner">
											<div class="accordion-heading">
												<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapse20">
													<embed src="CODCTA - Página inicial_arquivos/acervo/a_guerra/C. ARSENAL/CHECKLISTS/CheckList Canteiro de Obras.pdf" style="width: 100%; height: 100vh" />
												</a>
											</div>
										</div>
									</div>

									<div class="accordion-heading">
										<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse16" style="color:#000">
											Modelos <i class="far fa-file-alt fa-pull-right"></i>
										</a>
									</div>
									<div id="collapse16" class="accordion-body collapse">
										<div class="accordion-inner">
											<div class="accordion-heading">
												<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapse20">
													<embed src="CODCTA - Página inicial_arquivos/acervo/a_guerra/C. ARSENAL/MODELOS/Especificação Técnica Canteiro de Obras.pdf" style="width: 100%; height: 100vh"/>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>`;
				} 
			} 

			if(title.valueOf() == "Forças e Oportunidades".valueOf()){
				if(type.valueOf() == "A Guerra".valueOf()){
					return `
					<h3>${title}</h3>

					<div class="card-content">
						<embed src="CODCTA - Página inicial_arquivos/acervo/a_guerra/forcas_oportunidades/AT A Guerra - Forças e Oportunidades.pdf" style="width: 100%; height: 100vh" />
					</div>`;

				} 
			}

			if(title.valueOf() == "Ameaças e Fraquezas".valueOf()){
				if(type.valueOf() == "A Guerra".valueOf()){
					return `
					<h3>${title}</h3>
					<div class="card-content">
						<embed src="CODCTA - Página inicial_arquivos/acervo/a_guerra/ameacas_fraquezas/AT A Guerra - Ameaças e Fraquezas.pdf" style="width: 100%; height: 100vh" />
					</div>`;

				} 
			} 

		}

		const onCardClick = async (e) => {
			const card = e.currentTarget;
			// clone the card
			const cardClone = card.cloneNode(true);
            cardClone.removeAttribute("onclick");
			// get the location of the card in the view
		    const {top: top2, left: left2, width: width2, height: height2} = card.parentNode.getBoundingClientRect();
            const {top, left, width, height} = card.getBoundingClientRect();
			// position the clone on top of the original
			cardClone.style.position = 'absolute';
			cardClone.style.top = top - top2 + 'px';
			cardClone.style.left = left - left2 + 'px';
			cardClone.style.width = width - width2 + 'px';
			cardClone.style.height = height - height2 + 'px';
			// hide the original card with opacity
			card.style.opacity = '0';
			// add card to the same container
			card.parentNode.appendChild(cardClone);
			// create a close button to handle the undo
			const closeButton = document.createElement('button');
			// position the close button top corner
			closeButton.style = `
				position: absolute;
				z-index: 10000;
				top: 15px;
				right: 35px;
				width: 25px;
				height: 25px;
				border-radius: 50%;
				background-color: #595959;
			`;
            // attach click event to the close button
			closeButton.addEventListener('click', async () => {
				// remove the button on close
				closeButton.remove();
				// remove the display style so the original content is displayed right
				cardClone.style.removeProperty('display');
				cardClone.style.removeProperty('padding');
				// show original card content
				[...cardClone.children].forEach(child => child.style.removeProperty('display'));
				fadeContent(cardClone, '0');
				// shrink the card back to the original position and size
				await toggleExpansion(cardClone, {top: `${top - top2}px`, left: `${left - left2}px`, width: `${width}px`, height: `${height}px`}, 300)
				// show the original card again
				card.style.removeProperty('opacity');
				// remove the clone card
				cardClone.remove();
			});
			// fade the content away
			fadeContent(cardClone, '0')
				.then(() => {
					[...cardClone.children].forEach(child => child.style.display = 'none');
				});
			// expand the clone card
			await toggleExpansion(cardClone, {top: 0, left: 0, width: '98%', height: '98%'});
			const content = getCardContent(card.textContent, card.dataset.type)
			// set the display block so the content will follow the normal flow in case the original card is not display block
			cardClone.style.display = 'block';
			cardClone.style.padding = '0';
			// append the close button after the expansion is done
			cardClone.appendChild(closeButton);
			cardClone.insertAdjacentHTML('afterbegin', content);
		};

		//cards.forEach(card => card.addEventListener('click', onCardClick));

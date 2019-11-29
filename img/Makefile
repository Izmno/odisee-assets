adobe = logo_nl.ai logo_en.ai

all: logo_nl.eps logo_en.eps

logo_nl.eps: logo_nl.ai
	inkscape -f logo_nl.ai -E logo_nl.eps

logo_en.eps: logo_en.ai
	inkscape -f logo_en.ai -E logo_en.eps


logo_nl.ai: 
	curl http://huisstijl2.odisee.be/system/files/content/pages/files/odisee_2019_nachtblauw_rgb.ai --output logo_nl.ai

logo_en.ai:
	curl http://huisstijl2.odisee.be/system/files/content/pages/files/odisee_logo_nachtblauw_eng.ai --output logo_en.ai

.PHONY:	clean

clean:
	-rm *.ai *.pdf *.eps
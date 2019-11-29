all: SourceSansPro-Regular.tfm \
	SourceSansPro-Bold.tfm \
	SourceSansPro-Italic.tfm \
	SourceSansPro-BoldItalic.tfm 

SourceSansPro-Regular.tfm:
	ttf2tfm SourceSansPro-Regular.ttf -q -T t1-WGL4.enc -v SourceSansPro-Regular.vpl sspmn8t.tfm
	vptovf SourceSansPro-Regular.vpl SourceSansPro-Regular.vf sspmn8t.tfm

SourceSansPro-Bold.tfm:
	ttf2tfm SourceSansPro-Bold.ttf -q -T t1-WGL4.enc -v SourceSansPro-Bold.vpl sspbn8t.tfm
	vptovf SourceSansPro-Bold.vpl SourceSansPro-Bold.vf sspbn8t.tfm

SourceSansPro-Italic.tfm:
	ttf2tfm SourceSansPro-Italic.ttf -q -T t1-WGL4.enc -v SourceSansPro-Italic.vpl sspmit8t.tfm
	vptovf SourceSansPro-Italic.vpl SourceSansPro-Italic.vf sspmit8t.tfm

SourceSansPro-BoldItalic.tfm:
	ttf2tfm SourceSansPro-BoldItalic.ttf -q -T t1-WGL4.enc -v SourceSansPro-BoldItalic.vpl sspbit8t.tfm
	vptovf SourceSansPro-BoldItalic.vpl SourceSansPro-BoldItalic.vf sspbit8t.tfm

.PHONY: clean

clean:
	-rm *.tfm *.vpl *.vf

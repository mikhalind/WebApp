namespace BPMSoft.Configuration
{

	using BPMSoft.Common;
	using BPMSoft.Core;
	using BPMSoft.Core.Configuration;
	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;

	#region Class: DefaultOpenIdUserChangeValidatorSchema

	/// <exclude/>
	public class DefaultOpenIdUserChangeValidatorSchema : BPMSoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public DefaultOpenIdUserChangeValidatorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public DefaultOpenIdUserChangeValidatorSchema(DefaultOpenIdUserChangeValidatorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("8ec53e46-ef7a-45a0-abd4-217bf5a8fdf0");
			Name = "DefaultOpenIdUserChangeValidator";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("cafc62fc-f7d7-4a5d-acf5-62f836ef940a");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,83,203,106,235,48,16,93,167,208,127,152,186,27,27,130,63,160,143,11,137,211,20,47,210,6,220,222,77,41,23,197,26,219,2,91,50,122,20,76,200,191,87,150,220,36,190,36,52,75,205,232,60,102,142,4,156,52,168,90,146,35,204,215,171,76,20,58,78,4,47,88,105,36,209,76,240,248,181,69,158,210,153,209,213,245,213,246,250,106,98,20,227,37,100,157,210,216,220,239,207,7,172,196,211,213,248,137,107,166,25,170,51,237,37,201,181,144,190,111,111,220,74,44,173,60,36,53,81,234,14,22,88,16,83,107,111,230,93,161,76,42,194,75,252,75,106,70,137,197,57,204,199,112,107,206,56,181,252,161,238,90,20,69,152,158,69,69,209,167,133,181,102,83,179,28,242,94,233,87,33,184,131,243,124,150,108,235,156,236,237,175,80,87,130,218,1,214,78,196,55,7,193,141,16,53,36,132,123,146,158,46,116,156,130,115,204,251,221,131,25,29,167,224,86,216,129,234,212,140,54,140,191,115,166,87,130,178,130,33,141,160,15,103,50,121,54,140,58,92,74,225,241,228,205,248,25,245,155,221,12,77,68,109,26,110,205,27,124,232,97,127,194,32,165,65,116,239,120,190,136,4,149,87,216,16,75,51,246,225,147,236,50,215,93,17,78,74,148,61,105,202,149,38,60,199,121,247,98,223,84,24,100,71,226,35,218,163,122,239,209,241,196,137,68,162,209,83,135,99,193,1,171,180,180,169,126,124,194,191,220,57,87,111,98,137,58,175,44,199,22,2,23,202,34,51,155,96,10,193,204,226,190,48,128,157,71,178,2,194,155,99,217,216,1,151,82,52,139,121,56,106,248,169,226,181,100,13,145,157,95,81,220,207,51,29,182,58,253,95,62,250,89,253,68,162,54,146,131,150,6,189,238,110,175,238,189,199,169,122,49,117,253,42,159,154,214,78,57,18,62,149,138,71,217,92,14,195,69,151,201,93,154,123,255,6,45,255,176,175,8,30,199,111,230,18,204,111,126,134,114,65,106,229,235,187,225,139,32,167,254,151,184,179,175,142,139,59,248,6,107,23,78,24,159,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("8ec53e46-ef7a-45a0-abd4-217bf5a8fdf0"));
		}

		#endregion

	}

	#endregion

}

